import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

@Entity('courses')
export default class Course {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  price!: number;

  @Column()
  workload!: number;

  @Column()
  lessons!: number;

  @Column()
  year!: number;

  @Column()
  author_id!: string;

  @ManyToOne(() => User, user => user.courses)
  @JoinColumn({ name: 'author_id' })
  author!: User;

  @OneToMany(() => Favorite, favorite => favorite.course)
  favorites!: Favorite[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
