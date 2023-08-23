import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
