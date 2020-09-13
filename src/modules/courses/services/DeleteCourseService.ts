import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  course_id: string;
  user_id: string;
}

@injectable()
export default class ListCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({ course_id, user_id }: IRequest): Promise<void> {
    const course = await this.coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Course not found');
    }

    if (course.author_id !== user_id) {
      throw new AppError('You can not delete this course');
    }

    await this.coursesRepository.remove(course_id);
  }
}
