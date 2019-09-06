import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

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
    gender: 'male',
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '3',
    isActive: true,
    photoPath: null
  };
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
