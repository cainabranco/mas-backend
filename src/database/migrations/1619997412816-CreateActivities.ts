import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1619997412816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activities",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "activity_date",
                        type: "timestamp"
                    },
                    {
                      name: "grade",
                      type: "decimal"
                    },
                    {
                        name: "courseUnitId",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp"
                    },
                    {
                        name: "course_unit",
                        type: "varchar",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "ActivityCourseUnit",
                        referencedTableName: "course_unities",
                        referencedColumnNames: ['id'],
                        columnNames: ['courseUnitId']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities")
    }

}
