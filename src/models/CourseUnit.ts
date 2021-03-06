import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

import {Activity} from "./Activity";

@Entity('course_unities')
class CourseUnit {

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Activity, activity => activity.course_unit)
    activities: Activity[];
}

export {CourseUnit}