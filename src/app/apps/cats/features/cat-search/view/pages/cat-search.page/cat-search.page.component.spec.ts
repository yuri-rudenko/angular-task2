import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSearchPageComponent } from './cat-search.page.component';

describe('CatSearchPageComponent', () => {
  let component: CatSearchPageComponent;
  let fixture: ComponentFixture<CatSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
