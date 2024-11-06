import { Ficha } from 'src/ficha/entities/ficha.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    cpf: string;

    @OneToMany(() => Ficha, (ficha) => ficha.user)
    fichas: Ficha[];
    
}
