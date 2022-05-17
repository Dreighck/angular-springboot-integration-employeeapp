import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
   return this.httpClient.get<Employee[]>("http://localhost:9000/api/v1/employees");
  }

  addNewEmployee(employee :Employee): Observable<Employee>{
    return this.httpClient.post<Employee>("http://localhost:9000/api/v1/employees",employee);
  }

  updateEmployee(employee :Employee): Observable<Employee>{
    return this.httpClient.put<Employee>("http://localhost:9000/api/v1/employees",employee);
  }

  getEmployeeById(){}

  deleteEmployee(){}
}
