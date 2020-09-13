import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCourseService from '@modules/courses/services/CreateCourseService';
import ListCoursesService from '@modules/courses/services/ListCoursesService';
import ShowCoursesSrevice from '@modules/courses/services/ShowCoursesSrevice';
import UpdateCourseService from '@modules/courses/services/UpdateCourseService';
import DeleteCourseService from '@modules/courses/services/DeleteCourseService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { title, price, workload, lessons, year } = request.body;

      const CreateCourse = container.resolve(CreateCourseService);

      const course = await CreateCourse.execute({
        title,
        price,
        workload,
        lessons,
        author: user_id,
        year,
      });

      return response.json(classToClass(course));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCourses = container.resolve(ListCoursesService);

    const courses = await listCourses.execute();

    return response.json(courses);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const showCourses = container.resolve(ShowCoursesSrevice);

    const course = await showCourses.execute({ course_id });

    return response.json(classToClass(course));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { course_id } = request.params;
    const { title, price, workload, lessons, year } = request.body;

    const updateCourse = container.resolve(UpdateCourseService);

    const course = await updateCourse.execute({
      user_id,
      course_id,
      title,
      price,
      workload,
      lessons,
      year,
    });

    return response.json(classToClass(course));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { course_id } = request.params;
    const deleteCourse = container.resolve(DeleteCourseService);

    await deleteCourse.execute({ course_id, user_id });

    return response.status(204).json();
  }
}
