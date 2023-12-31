import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // 1. Render courses in a list
  // 2. Select a course
  // 3. Render selected course

  courses = [];
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  fetchCourses() {
    this.coursesService
      .all()
      .subscribe((result: Course[]) => (this.courses = result));
  }

  deleteCourse(id) {
    this.coursesService.delete(id).subscribe((result) => this.fetchCourses());
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService
      .create(course)
      .subscribe((result) => this.fetchCourses());
  }

  updateCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
