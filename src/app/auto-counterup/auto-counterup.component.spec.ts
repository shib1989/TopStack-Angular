import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCounterupComponent } from './auto-counterup.component';

describe('AutoCounterupComponent', () => {
  let component: AutoCounterupComponent;
  let fixture: ComponentFixture<AutoCounterupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCounterupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCounterupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
