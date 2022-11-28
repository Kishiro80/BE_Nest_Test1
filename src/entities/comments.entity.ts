import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posts } from "./posts.entity";


@Entity('comments')
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  body: string;
 
  @ManyToOne(()=>Posts, posts=>posts.comments)
  posts:Posts;

  
}
