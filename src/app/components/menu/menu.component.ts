import { Component, OnInit } from '@angular/core';
import { navLink } from 'src/app/interfaces/footer-nav.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuList: navLink[] = [
    {
      item: 'home',
      text: 'Home',
      link: '/',
      icon: 'fa-solid fa-house',
    },
    {
      item: 'messages',
      text: 'Messages',
      link: '/message',
      icon: 'fa fa-commenting',
    },
    {
      item: 'profile',
      text: 'Profile',
      link: '/profil',
      icon: 'fa fa-user',
    },
    {
      item: 'saved-post',
      text: 'Saved Post',
      link: '/saved',
      icon: 'fa-solid fa-bookmark',
    },
    {
      item: 'setting',
      text: 'Settings',
      link: '/setting',
      icon: 'fa-solid fa-gear',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
