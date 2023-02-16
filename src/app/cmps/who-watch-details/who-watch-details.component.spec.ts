import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWatchDetailsComponent } from './who-watch-details.component';

describe('WhoWatchDetailsComponent', () => {
  let component: WhoWatchDetailsComponent;
  let fixture: ComponentFixture<WhoWatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWatchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
