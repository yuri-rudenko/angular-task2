import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTableComponent } from './photo-table.component';

describe('PhotoTableComponent', () => {
  let component: PhotoTableComponent;
  let fixture: ComponentFixture<PhotoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
