import { getRepository } from "typeorm"
import { Activity } from "../models/Activity"

interface UserId {
    id?:string;
}

class GetActivityService {

    public async execute({id}:UserId){
        console.log('Id do usuário da atividade: ' + id)

        const activityRepository = getRepository(Activity);

        const activities = await activityRepository.find({relations: ["course_unit"]});

        if(!activities){
            return {
                message: 'activities not found'
            }
        }

        return activities

    }

}

export {GetActivityService}