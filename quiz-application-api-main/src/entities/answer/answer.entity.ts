import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Question } from "../question/question.entity";
import { User } from "../users/user.entity";

@Entity("answers")
export class Answer {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    content: string;

    @Column()
    point: number;

    @ManyToOne(() => Question, question => question.answers)
    question: Question;

    @ManyToMany(() => User, user => user.id, { cascade: true })
    users: User[];

}