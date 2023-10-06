import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallticketsComponent } from './getalltickets.component';
import { GetallticketsService } from './getalltickets.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallticketsComponent } from './getalltickets.component';
import { AgGridModule } from 'ag-grid-angular';


describe('GetallticketsComponent', () => {
  let component: GetallticketsComponent;
  let fixture: ComponentFixture<GetallticketsComponent>;
  let service: GetallticketsService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        AgGridModule,
      ],
      declarations: [ GetallticketsComponent ],
      providers: [ GetallticketsService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallticketsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GetallticketsService);
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
  


  // GpGetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData = [{ 
      _id: 1, 
      name: 'tickets 1',
      assigness: 'tickets 1',
      types: 'tickets 1',
      severity: 'tickets 1',
      ticketstatus: 'tickets 1',
    }];
    spyOn(service, 'GpGetAllValues').and.returnValue(of(mockData));

    component.GpGetAllValues();

    expect(service.GpGetAllValues).toHaveBeenCalled();
    expect(component.rowData).toEqual(mockData);
  });
  it('should log error on update GpGetAllValues failure', () => {
    const error = new Error('GpGetAllValues failed');
    spyOn(service, 'GpGetAllValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpGetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });








});