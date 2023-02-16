import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWatchPreviewComponent } from './who-watch-preview.component';

describe('WhoWatchPreviewComponent', () => {
  let component: WhoWatchPreviewComponent;
  let fixture: ComponentFixture<WhoWatchPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWatchPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWatchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
