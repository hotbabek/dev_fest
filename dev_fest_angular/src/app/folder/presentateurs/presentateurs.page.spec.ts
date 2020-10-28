import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresentateursPage } from './presentateurs.page';

describe('PresentateursPage', () => {
  let component: PresentateursPage;
  let fixture: ComponentFixture<PresentateursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentateursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentateursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
