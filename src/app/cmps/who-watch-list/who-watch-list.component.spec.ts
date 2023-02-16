import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWatchListComponent } from './who-watch-list.component';

describe('WhoWatchListComponent', () => {
  let component: WhoWatchListComponent;
  let fixture: ComponentFixture<WhoWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWatchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
