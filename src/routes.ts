import {Router, Request, Response, response} from "express";
import {UserController} from "./controller/UserController";
import {ActivityController} from "./controller/ActivityController";
import {CourseUnitController} from "./controller/CourseUnitController";
import {AuthenticateController} from "./controller/AuthenticateController";

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activity', activityController.create);
routes.post('/courseunit', courseUnitController.create);
routes.post('/auth', authenticateController.create)

export default routes;