/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { provideAppStore } from '../core/core.module';
import { MapService } from '../core/map.service';
import { LayerService } from './shared/layer.service';
import { NgMap } from './shared/map';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [
        provideAppStore(),
        MapService,
        LayerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.map = new NgMap();
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });
});
