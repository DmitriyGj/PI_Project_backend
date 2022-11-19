import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: '' })
    login: string

    @Column({ default: '' })
    password: string

    @Column({ default: '' })
    email: string
}