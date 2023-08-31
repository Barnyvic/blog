import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { UsersEntity } from "./UsersEntity";

@Entity()
export class PostEntity extends BaseEntity {
        @Column()
        title: string;

        @Column({ type: 'text' })
        content: string;

        @ManyToOne(() => UsersEntity, (user) => user.posts, {
                onDelete: 'CASCADE',
        })
        author: UsersEntity;
}