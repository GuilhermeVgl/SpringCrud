import { Component } from "@angular/core";
import { Course } from "../model/course.model";

@Component({
  selector: "app- ",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {

  courses: Course[] = [
    {courseid: 1, name: "Curso de Java", category: "Back-end Software Development"},
    {courseid: 1, name: "Curso de Angular", category: "Front-end Software Development"},
    {courseid: 1, name: "Curso de Spring Boot", category: "Back-end Software Development"},
    {courseid: 1, name: "Curso de React", category: "Front-end Software Development"},
  ];

  visibleColumns = ["name", "category",];

  constructor() {
  }

  ngOnInit(): void {
  }
}
