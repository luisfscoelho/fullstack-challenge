import { getRepository, Repository } from 'typeorm';

import ICoursesProvider from '@modules/courses/repositories/ICoursesRepository';
import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';

import Course from '../entities/Course';

class CoursesProvider implements ICoursesProvider {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async findAllCourses(): Promise<Course[]> {
    const courses = await this.ormRepository.find();

    return courses;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await this.ormRepository.findOne(id);

    return course;
  }

  public async create(courseData: ICreateCourseDTO): Promise<Course> {
    const { title, price, workload, lessons, year, author } = courseData;
    const course = this.ormRepository.create({
      title,
      price,
      workload,
      lessons,
      year,
      author_id: author,
    });

    await this.ormRepository.save(course);

    return course;
  }

  public async save(course: Course): Promise<Course> {
    return this.ormRepository.save(course);
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default CoursesProvider;
