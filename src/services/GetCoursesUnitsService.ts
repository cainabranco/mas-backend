import {getRepository} from "typeorm";
import {CourseUnit} from "../models/CourseUnit";

interface UserId {
    id?: string;
}

class GetCoursesUnitsService {
    public async execute({id}:UserId) {
        const curseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = curseUnitRepository.find();

        if(!coursesUnits){
            return {
                message: 'Courses units not found'
            }
        }

        return coursesUnits
    }
}

export {GetCoursesUnitsService};
