import { Component } from "@angular/core";
import { Course } from "../model/course.model";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {

  courses: Course[] = [
    {courseid: 1, name: "Curso de Java", category: "Back-end Software Development", price: 45, dataLancamento: new Date(2023, 6, 24)},
    {courseid: 1, name: "Curso de Angular", category: "Front-end Software Development", price: 95, dataLancamento: new Date(2023, 6, 24)},
    {courseid: 1, name: "Curso de Spring Boot", category: "Back-end Software Development", price: 50, dataLancamento: new Date(2023, 6, 24)},
    {courseid: 1, name: "Curso de React", category: "Front-end Software Development", price: 15, dataLancamento: new Date(2023, 6, 24)},
  ];

  visibleColumns = ["name", "category", "price", "dataLancamento"];

  constructor() {
  }

  ngOnInit(): void {
  }
}
