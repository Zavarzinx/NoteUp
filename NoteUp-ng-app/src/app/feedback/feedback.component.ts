import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model:FeedbackViewModel = {
    name:'',
    email:'',
    feedback:''
  };

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  sendFeedback(): void{
    let url = "http://localhost:8080/api/feedback";
   this.http.post(url,this.model).subscribe(
     res =>{
       location.reload();
     },
     err => {
       alert("An error has occured while sending feedback");
     }
   )
  }

}

export interface FeedbackViewModel {
  name:string;
  email:string;
  feedback:string;
}
