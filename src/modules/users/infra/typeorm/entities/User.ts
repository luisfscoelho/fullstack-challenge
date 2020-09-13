import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Exclude } from 'class-transformer';

import Course from '@modules/courses/infra/typeorm/entities/Course';
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  @Exclude()
  password!: string;

  @OneToMany(() => Course, course => course.author)
  courses!: Course[];

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites!: Favorite[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
