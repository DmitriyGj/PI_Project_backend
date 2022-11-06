import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('meeting')
export class MeetingEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: '' })
    name: string

    @Column({ default: '' })
    importance: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date
}