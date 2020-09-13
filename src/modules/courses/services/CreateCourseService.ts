import { injectable, inject } from 'tsyringe';

import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  title: string;
  price: number;
  workload: number;
  lessons: number;
  author: string;
  year: number;
}

@injectable()
export default class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    title,
    price,
    workload,
    lessons,
    author,
    year,
  }: IRequest): Promise<Course> {
    const user = await this.coursesRepository.create({
      title,
      price,
      workload,
      lessons,
      author,
      year,
    });

    return user;
  }
}
