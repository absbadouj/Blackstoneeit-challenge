import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/footer-nav.interface';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
})
export class UserBoxComponent implements OnInit {
  @Input()
  public hasUserName: boolean = true;

  @Input()
  public user: User;

  @Input()
  public entryClassImg: string;

  @Input()
  public hasFollowBtn: boolean;

  constructor() {}

  ngOnInit(): void {}
}
