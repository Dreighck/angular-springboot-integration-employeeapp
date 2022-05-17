import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];

  employee: Employee = new Employee();

  errorMessage: string = "";

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(){

    this.employeeService.getAllEmployees().subscribe({
      next:(employees)=>{
        console.log(employees);
        this.employees = employees;
      }
    })
  }

  add(){
    console.log("Add method is invoked");

    if(this.employee.id != 0 && this.employee.salary !=0 && this.employee.firstName != "" && this.employee.designation != "" ){

        this.employeeService.addNewEmployee(this.employee).subscribe({
          next:(employee)=>{
            console.log(employee);
            this.employees.push(employee);
            this.errorMessage = "";
          },
          error:(errorResponse)=>{
            console.log(errorResponse);
            this.errorMessage = errorResponse.error;
          }
        });
    }
    else{
      this.errorMessage = "Fields Cannot be empty or Zero";
    }

    console.log(this.employee);
  }

}
