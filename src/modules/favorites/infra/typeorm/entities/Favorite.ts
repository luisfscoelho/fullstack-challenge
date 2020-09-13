import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Course from '@modules/courses/infra/typeorm/entities/Course';

@Entity('favorites')
export default class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @ManyToOne(() => User, user => user.favorites)
  @JoinColumn({ name: 'author_id' })
  user!: User;

  @Column()
  course_id!: string;

  @ManyToOne(() => Course, course => course.favorites)
  @JoinColumn({ name: 'Course_id' })
  course!: Course;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
