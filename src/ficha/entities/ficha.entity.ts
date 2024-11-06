import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ficha {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    texto: string;

    @Column()
    satisfacao: number;

    @Column()
    data: Date;

    @ManyToOne(() => User, (user) => user.fichas)
    user: User;
}
