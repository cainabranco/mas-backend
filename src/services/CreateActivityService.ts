import {getRepository} from 'typeorm';
import {Activity} from "../models/Activity";

interface ActivityData {
    name: string;
    activity_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivityService {

    public async execute({name, activity_date, grade, courseUnitId}: ActivityData): Promise<Activity> {

        const activityRepository = getRepository(Activity);

        const activity = activityRepository.create({
            name,
            activity_date,
            grade,
            courseUnitId
        });

        await activityRepository.save(activity);

        return activity;
    }
}

export {CreateActivityService};