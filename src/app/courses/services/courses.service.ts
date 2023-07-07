import { Injectable } from '@angular/core';

import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): CoursesService {
    return [
      {courseid: 1, name: "Curso de Java", category: "Back-end Software Development", price: 45},
      {courseid: 1, name: "Curso de Angular", category: "Front-end Software Development", price: 95},
      {courseid: 1, name: "Curso de Spring Boot", category: "Back-end Software Development", price: 65},
      {courseid: 1, name: "Curso de React", category: "Front-end Software Development", price: 55},
    ]
  }
}
