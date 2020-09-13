import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  user_id: string;
  course_id: string;
  title: string;
  price: number;
  workload: number;
  lessons: number;
  year: number;
}

@injectable()
export default class ListCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    user_id,
    course_id,
    title,
    price,
    workload,
    lessons,
    year,
  }: IRequest): Promise<Course | undefined> {
    const course = await this.coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Course not found');
    }

    if (course.author_id !== user_id) {
      throw new AppError('You ca not update this course');
    }

    course.title = title;
    course.price = price;
    course.workload = workload;
    course.lessons = lessons;
    course.year = year;

    return this.coursesRepository.save(course);
  }
}
