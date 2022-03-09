import { Entity, Column, PrimaryGeneratedColumn, Unique, PrimaryColumn, OneToMany } from "typeorm";
import { Question } from "../question/question.entity";

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @PrimaryColumn()
    name: string;

    @Column()
    minimumScore: number;

    @Column()
    maximumScore: number;

    @OneToMany(() => Question, question => question.category)
    questions: Question[];

}