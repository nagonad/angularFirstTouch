import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

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
  selectedCourse = emptyCourse;
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 14,
      favorite: false,
    },
    {
      id: 2,
      title: 'Good ol Java',
      description: 'Learn the fundamentals of Java',
      percentComplete: 94,
      favorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = { ...course };
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  saveCourse(course) {
    console.log('course saved', course);
  }
}
