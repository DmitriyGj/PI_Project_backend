import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date
}