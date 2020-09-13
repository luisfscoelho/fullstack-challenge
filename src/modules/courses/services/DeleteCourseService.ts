import { injectable, inject } from 'tsyringe';

import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  course_id: string;
}

@injectable()
export default class ListCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({ course_id }: IRequest): Promise<void> {
    await this.coursesRepository.remove(course_id);
  }
}
