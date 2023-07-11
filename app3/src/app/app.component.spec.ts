import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userService: CommonService;
  let httpMock: HttpTestingController;

  // Will run before every Component Render

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [CommonService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(CommonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Created A component Virtually
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Checking
  });

  it('To Check My Student Name ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.changeStudentName();
    fixture.detectChanges();
    expect(app.myStudentName).toEqual('Murali krishna');
  });
  it(`should have as title 'app3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app3');
  });

  it('hanlde show users', () => {
    const dummyUsers = [
      { login: 'John', id: 1 },
      { login: 'Doe', id: 2 }
    ];

    spyOn(userService, 'getUsers').and.returnValue(of(dummyUsers));
    component.showUsers();
    expect(component.myUsers.length).toBe(2);
    expect(component.myUsers).toEqual(dummyUsers);
    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.myUsers.length).toEqual(2);
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('app3 app is running!');
  // });
});
