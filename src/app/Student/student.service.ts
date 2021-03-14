import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Student {
  name: string,
  id:number,
  gpa:number,
  date:Date,
  regester:Date
}

@Injectable()
export class StudentServes {
  constructor(private http: HttpClient) {}

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8000/api/allstudents')
  }

 

  insertStudent(student: Student): Observable<Student[]> {
    return this.http.post<Student[]>('http://localhost:8000/api/allstudents/', student)
  }

  /*updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/cats/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name)*/
  //}
}