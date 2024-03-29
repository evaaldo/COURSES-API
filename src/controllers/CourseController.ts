import { Request, Response } from 'express'
import { CourseService } from '../services/CourseService'

const courseService = new CourseService()

export class CourseController {

    async createCourse(request: Request, response: Response) {

        const { title, educator, description } = request.body

        await courseService.createCourse(title, educator, description)

        try {
            return response.status(200).json({ message: 'Course created!' })
        } catch(error) {
            return response.status(400).json(error)      
        }

    }

    async getCourseByEducator(request: Request, response: Response) {

        const { educator } = request.body

        const courseDatabase = await courseService.getCourseByEducator(educator)

        try {
            return response.status(200).json(courseDatabase)
        } catch(error) {
            return response.status(400).json(error)
        }

    }

    async getAllCourses(request: Request, response: Response) {

        try {

            const courses = await courseService.getAllCourses()

            return response.status(200).json(courses)

        } catch(error) {

            return response.status(400).json(error)

        }

    }

    async deleteCourseByTitle(request: Request, response: Response) {

        const { title } = request.body

        await courseService.deleteCourseByTitle(title)

        try {
            return response.status(200).json({ message: `Course ${title} deleted!` })
        } catch(error) {
            return response.status(400).json(error)
        }

    }

    async updateCourse(request: Request, response: Response) {

        const { title, educator } = request.body
        const id = request.params.id

        await courseService.updateCourse(id, title, educator)

        try {
            return response.status(200).json({ message: 'Course updated!' })
        } catch(error) {
            return response.status(400).json(error)      
        }

    }

    async deleteCourseByEducator(request: Request, response: Response) {

        const { educator } = request.body

        await courseService.deleteCourseByEducator(educator)

        try {
            return response.status(200).json({ message: 'Courses deleted!' })
        } catch(error) {
            return response.status(400).json(error)
        }

    }

}