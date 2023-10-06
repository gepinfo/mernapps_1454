import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateticketComponent } from './createticket.component';
import { CreateticketService } from './createticket.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateticketComponent } from './createticket.component';


describe('CreateticketComponent', () => {
  let component: CreateticketComponent;
  let fixture: ComponentFixture<CreateticketComponent>;
  let service: CreateticketService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ CreateticketComponent ],
      providers: [ CreateticketService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateticketComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CreateticketService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.tickets.created_by).toEqual(mockEmail);

  });
  

  // GpCreate test case file
  it('should call GpCreate and reset  properties', () => {

    // Create a spy for the GpCreate method of the service
    spyOn(service, 'GpCreate').and.returnValue(of({}));
    
    // Set values for tickets properties
    component.tickets.name = 'Test name';
    component.tickets.assigness = 'Test assigness';
    component.tickets.types = 'Test types';
    component.tickets.severity = 'Test severity';
    component.tickets.ticketstatus = 'Test ticketstatus';


    // Call the GpCreate method
    component.GpCreate();


    // Expect the GpCreate method to have been called with the tickets object
    expect(service.GpCreate).toHaveBeenCalledWith(component.tickets);

    // Expect the tickets properties to be reset
    expect(component.tickets.name).toBe('');
    expect(component.tickets.assigness).toBe('');
    expect(component.tickets.types).toBe('');
    expect(component.tickets.severity).toBe('');
    expect(component.tickets.ticketstatus).toBe('');
  });
  it('should log error on update GpCreate failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'GpCreate').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpCreate();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

























});