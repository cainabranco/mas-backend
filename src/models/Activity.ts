import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";
import {CourseUnit} from "./CourseUnit";

@Entity('activities')
class Activity {

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: string

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activities)
    course_unit: CourseUnit
}

export {Activity}