import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotalikeComponent } from './botalike.component';

describe('BotalikeComponent', () => {
  let component: BotalikeComponent;
  let fixture: ComponentFixture<BotalikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotalikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotalikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
