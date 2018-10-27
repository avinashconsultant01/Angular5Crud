import { Component, OnInit, SimpleChanges  } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  employeeToDisplay: Employee;

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService) { }
  // Call the getEmployees() service method of EmployeeService
  // using the private variable _employeeService
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.employees[0];
    }
  }
}
