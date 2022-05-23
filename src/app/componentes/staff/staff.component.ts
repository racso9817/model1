import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  attorneys = [
    {
      name: 'Juan Perez',
      position: 'Asesor Legal',
      image: '/assets/staff/img2.jpeg',
    },
    {
      name: 'Carla Perez',
      position: 'Abogada',
      image: 'assets/staff/img1.jpeg',
    },
    {
      name: 'Jeremy Sojos',
      position: 'Abogado',
      image: 'assets/staff/img2.jpeg',
    },
    {
      name: 'Sophia Villalba',
      position: 'Abogada',
      image: 'assets/staff/img1.jpeg',
    },
  ];

  //pagination variables
  page = 1;
  pageSize = 2;
  attorneysLength = this.attorneys.length;


  constructor() { }

  ngOnInit(): void {
  }

}
