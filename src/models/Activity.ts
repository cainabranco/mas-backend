import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, JoinTable} from "typeorm";
import {v4 as uuid} from "uuid";

import {CourseUnit} from "./CourseUnit";

@Entity('activities')
class Activity {

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activity_date: Date;

    @Column()
    courseUnitId: string;

    @Column()
    grade: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activities)
    @JoinTable()
    course_unit: CourseUnit
}

export {Activity};