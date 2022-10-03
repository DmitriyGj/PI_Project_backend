import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class ClientPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date
}