import {Router, Request, Response, response} from "express";
import {UserController} from "./controller/UserController";
import {ActivityController} from "./controller/ActivityController";
import {CourseUnitController} from "./controller/CourseUnitController";
import {AuthenticateController} from "./controller/AuthenticateController";
import authenticated from "./middlewares/authenticated";

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.get('/user', authenticated, userController.show);

routes.post('/activity', activityController.create);
routes.get('/activity', authenticated, activityController.show);

routes.post('/courseunit', authenticated, courseUnitController.create);
routes.get('/courseunit', authenticated, courseUnitController.show);

routes.post('/auth', authenticated, authenticateController.create)

export default routes;