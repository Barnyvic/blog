import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { PostEntity } from './PostEntity';

@Entity()
export class UsersEntity extends BaseEntity {
        @Column()
        firstName: string;

        @Column()
        lastName: string;

        @Column({ unique: true })
        email: string;

        @Column()
        password: string;

        @OneToMany(() => PostEntity, (posts) => posts.author, {
                cascade: true,
        })
        posts: PostEntity[];
}
