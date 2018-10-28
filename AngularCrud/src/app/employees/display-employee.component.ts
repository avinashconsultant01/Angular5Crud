import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  selectedEmployeeId: number;
  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
    console.log('Current : ' + currentEmployee.name);
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }


}
