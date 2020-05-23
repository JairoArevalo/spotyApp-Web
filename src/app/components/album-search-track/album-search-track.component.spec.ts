import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchTrackComponent } from './album-search-track.component';

describe('AlbumSearchTrackComponent', () => {
  let component: AlbumSearchTrackComponent;
  let fixture: ComponentFixture<AlbumSearchTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSearchTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSearchTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
