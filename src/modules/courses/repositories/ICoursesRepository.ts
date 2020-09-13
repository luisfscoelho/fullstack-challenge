import Course from '../infra/typeorm/entities/Course';

import ICreateCourseDTO from '../dtos/ICreateCourseDTO';

export default interface ICoursesInterface {
  findAllCourses(): Promise<Course[]>;
  findById(id: string): Promise<Course | undefined>;
  create(data: ICreateCourseDTO): Promise<Course>;
  save(course: Course): Promise<Course>;
  remove(id: string): Promise<void>;
}
