import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorapiService {

  constructor(private http:HttpClient){ }

  postDoctor(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
    // get doctor api function 
    getDoctor(){
      return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    // update doctor api function 
    updateDoctor(data:any,id:number){
      return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
        console.log(".>>>>>>>>>>>>>>>>"+res);
        return res;
      }))
    }

    // delete doctor api function 
    deleteDoctor(id:number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

}
