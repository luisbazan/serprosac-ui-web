import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menuSideBar:MenuSideBar[] = [{
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [{
        title:'Principal',
        url: '/dashboard'
      }],
    },{
      title: 'Alumnos',
      icon: 'mdi mdi-school',
      submenu: [{
        title:'Lista',
        url: '/studentList'
      }]
    },{
      title: 'Cursos',
      icon: 'mdi mdi-book-open-page-variant',
      submenu: [{
        title:'Lista',
        url: '/courseList'
      }]
    },{
      title: 'Productos',
      icon: 'mdi mdi-factory',
      submenu: [{
        title:'Lista',
        url: '/productList'
      }]
    }
];

  constructor() { }

}

interface MenuSideBar {
  title:string;
  icon:string;
  url?:string;
  submenu?:SubMenuSideBar[]; 
}

interface SubMenuSideBar {
  title:string;
  url:string;
  icon?:string;
}