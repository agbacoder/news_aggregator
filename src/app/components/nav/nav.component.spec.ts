import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let userServiceStub = jasmine.createSpyObj('UserService', [ 
    'isAuthenticated', 'getFavoriteNews']
  )

  beforeEach(async () => {
    userServiceStub.isAuthenticated.and.returnValue(true);
    await TestBed.configureTestingModule({
        declarations: [NavComponent],
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [
            { provide: UserService, useValue: userServiceStub }
        ]
      }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoggedIn to true if user is authenticated', () => {
    expect(component.isLoggedIn).toBeTrue();
  });

});
