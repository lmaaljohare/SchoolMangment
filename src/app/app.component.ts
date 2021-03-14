import { HttpClient } from '@angular/common/http';
import { Component , OnInit,Directive } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Student, StudentServes } from './Student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient , private studentserves:StudentServes,private fb:FormBuilder){}
  studentlist:Student[];
  studentform:FormGroup;

    title = 'schoolmang';
    ngOnInit(): void {
      this.getAllStudent();
      this.studentform = this.fb.group({
       name:['',Validators.required],
       id:['',Validators.required],
       gpa:['',Validators.required],
       birth:['',Validators.required]
      });
   
     }
     getAllStudent(){
      this.studentserves.getAllStudent()
      .subscribe(std=>(this.studentlist=std));
    }
    get name() {
      return this.studentform.get("name");
    }
    get id() {
      return this.studentform.get("id");
    }
    get gpa() {
      return this.studentform.get("gpa");
    }
    get birth() {
      return this.studentform.get("birth");
    }
    getdata(){
      let name = this.name.value
      let id = this.id.value
      let gpa = this.gpa.value
      let birth =new Date(this.birth.value)     
        let current = new Date()
      let std:Student;
      std = {
        name:name,
        id:id,
        gpa:gpa,
        date:birth,
        regester:current
      }
      this.studentserves.insertStudent(std)
        .subscribe(x =>this.studentlist = x);
    }
       showlist() {
          document.getElementById("list").style.display = "block";
        }
      
    
}


