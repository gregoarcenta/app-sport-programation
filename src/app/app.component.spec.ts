import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have some title`, () => {
    expect(appComponent.title).toEqual('Hola Mundo');
  });

  it('should render title', () => {
    console.log(compiled.querySelector('h1')?.textContent);

    expect(compiled.querySelector('h1')?.textContent).toEqual('Hola Mundo');
  });
});
