import { CoursesService } from './../services/courses.service';
import { Component } from "@angular/core";
import { Course } from "../model/course.model";

@Component({
  selector: "app- ",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent  implements OnInit{

  courses: Course[] = [];
  visibleColumns = ["name", "category", "price"];
  CoursesService: CoursesService

  constructor() {
    this.CoursesService = new CoursesService();
    this.courses = this.CoursesService.list();
  }

  ngOnInit(): void {
  }
}
