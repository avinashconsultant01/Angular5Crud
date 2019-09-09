import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

import { Router } from '@angular/router';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: true,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    // empForm.reset();
    // this.createEmployeeForm.reset({
    //   name: 'Test Value',
    //   email: 'kudvenkat@pragimtech.com'
    // });
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
