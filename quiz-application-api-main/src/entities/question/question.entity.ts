import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Category } from "../category/category.entity";

@Entity("questions")
export class Question {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    content: string;

    @ManyToOne(() => Category, category => category.questions)
    @JoinTable()
    category: Category;

    @OneToMany(() => Answer, answer => answer.question)
    answers: Answer[];

}