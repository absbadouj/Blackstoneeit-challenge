import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { SuggesstionBoxComponent } from './components/suggesstion-box/suggesstion-box.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { AccountComponent } from './components/account/account.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserBoxComponent } from './components/elements/user-box/user-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedItemComponent,
    MenuComponent,
    SuggesstionBoxComponent,
    FooterNavComponent,
    LatestPostComponent,
    AccountComponent,
    StoryItemComponent,
    SideBarComponent,
    HomePageComponent,
    UserBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
