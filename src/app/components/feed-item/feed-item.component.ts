import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/footer-nav.interface';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  public numberLikes: number = 0;
  public numberComments: number = 0;
  public isLiked: boolean = false;
  public user: User;

  public likeFeed(): boolean {
    return !this.isLiked;
  }

  constructor() {}

  ngOnInit(): void {}
}
