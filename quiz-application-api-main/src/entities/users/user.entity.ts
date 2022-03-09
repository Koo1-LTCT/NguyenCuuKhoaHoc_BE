import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Category } from "../category/category.entity";

@Entity("users")
@Unique(["email"])
export class User {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Answer, answer => answer.id, { cascade: true })
    @JoinTable()
    answers: Answer[];

    @ManyToOne(() => Category, category => category.id)
    @JoinTable()
    category: Category | undefined;

}
