import { Component, OnInit } from '@angular/core';
import { navLink } from 'src/app/interfaces/footer-nav.interface';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
})
export class FooterNavComponent implements OnInit {
  public navLinks: navLink[] = [
    { item: 'about', text: 'About', link: '/about' },
    { item: 'help', text: 'Help', link: '/help' },
    { item: 'terms', text: 'Terms', link: '/terms' },
    { item: 'popular', text: 'Popular', link: '/popular' },
    { item: 'language', text: 'Language', link: '/language' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
