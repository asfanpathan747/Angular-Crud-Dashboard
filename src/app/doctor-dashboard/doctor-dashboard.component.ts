import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DoctorapiService } from '../SharedService/doctorapi.service';
import { DoctorDashboardModel } from './doctor-dashboard.model';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  formvalue!: FormGroup;
  doctorrecordObj: DoctorDashboardModel = new DoctorDashboardModel();
  doctorData!: any;
  constructor(
    private formbuilder: FormBuilder,
    private api: DoctorapiService
  ) {}

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      salary: [''],
    });
    this.getalldoctors();
  }

  // post doctor detaile
  postdoctorDetails() {
    this.doctorrecordObj.id = this.formvalue.value.id;
    this.doctorrecordObj.firstName = this.formvalue.value.firstName;
    this.doctorrecordObj.lastName = this.formvalue.value.lastName;
    this.doctorrecordObj.email = this.formvalue.value.email;
    this.doctorrecordObj.phone = this.formvalue.value.phone;
    this.doctorrecordObj.salary = this.formvalue.value.salary;

    this.api.postDoctor(this.doctorrecordObj).subscribe(
      (res) => {
        console.log(res);
        alert('Doctor Added Successfully');
        this.formvalue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getalldoctors();
      },
      (err) => {
        alert('Somthing Went Wrong');
      }
    );
  }

  // get and print records
  getalldoctors() {
    this.api.getDoctor().subscribe((res) => {
      this.doctorData = res;
    });
  }

  // delete doctor code here
  deleteDoctor(item: any) {
    console.log(item);
    this.api.deleteDoctor(item).subscribe((res) => {
      alert('Doctor Record Deleted');
      this.getalldoctors();
    });
  }

  //  doctor records edit function code
  editDoctor(item: any) {
    this.doctorrecordObj.id = item.id;
    this.formvalue.controls['firstName'].setValue(item.firstName);
    this.formvalue.controls['lastName'].setValue(item.lastName);
    this.formvalue.controls['email'].setValue(item.email);
    this.formvalue.controls['phone'].setValue(item.phone);
    this.formvalue.controls['salary'].setValue(item.salary);
  }
  updateallDoctor() {
    // this.doctorrecordObj.id = this.formvalue.value.id;
    this.doctorrecordObj.firstName = this.formvalue.value.firstName;
    this.doctorrecordObj.lastName = this.formvalue.value.lastName;
    this.doctorrecordObj.email = this.formvalue.value.email;
    this.doctorrecordObj.phone = this.formvalue.value.phone;
    this.doctorrecordObj.salary = this.formvalue.value.salary;

    this.api
      .updateDoctor(this.doctorrecordObj, this.doctorrecordObj.id)
      .subscribe((res) => {
        console.log(res);
        alert('Updated Successfully');
        this.formvalue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getalldoctors();
      });
  }
}
