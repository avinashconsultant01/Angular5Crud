import { Component, OnInit, SimpleChanges } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  dataFromChild: Employee;
  _searchTerm: string;
  employees: Employee[];
  employeeToDisplay: Employee;
  filteredEmployees: Employee[];

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService,
    private _router: Router,
  private _route: ActivatedRoute) { }
  // Call the getEmployees() service method of EmployeeService
  // using the private variable _employeeService
  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empList) => {
      this.employees = empList;
      this._route.queryParamMap.subscribe(params => {
        if (params.has('searchTerm')) {
          this.searchTerm = params.get('searchTerm');
        } else {
          this.filteredEmployees = this.employees;
          console.log(this.employees.length);
        }
      });
    });
  }

  nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.employees[0];
    }
  }

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: {
        'searchTerm': this.searchTerm,
        'testParam': 'testValue'
      },
      queryParamsHandling : 'merge'
    });
  }

}
