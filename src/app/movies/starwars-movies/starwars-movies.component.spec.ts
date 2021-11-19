import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsMoviesComponent } from './starwars-movies.component';

describe('StarwarsMoviesComponent', () => {
  let component: StarwarsMoviesComponent;
  let fixture: ComponentFixture<StarwarsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
