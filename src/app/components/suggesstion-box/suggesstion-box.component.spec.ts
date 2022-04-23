import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesstionBoxComponent } from './suggesstion-box.component';

describe('SuggesstionBoxComponent', () => {
  let component: SuggesstionBoxComponent;
  let fixture: ComponentFixture<SuggesstionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggesstionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggesstionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
