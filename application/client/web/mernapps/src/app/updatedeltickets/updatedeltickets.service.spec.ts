import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UpdatedelticketsService } from './updatedeltickets.service';
import { SharedService } from '../../shared/shared.service';

describe('updatedelticketsService', () => {
  let service: UpdatedelticketsService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;
  let deleteSpy: jasmine.Spy;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ UpdatedelticketsService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(UpdatedelticketsService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);
    let deleteSpy: jasmine.Spy;


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });




  // delete the test case 
  it('should send a DELETE request to the server', () => {
    const ticketsId = '1231jd-sfjdE-Y12Edj-kdfi';
    const jwtToken = '123Hsdf_23234fdsjk';
    const tickets = { 
      name: 'name 1'
      assigness: 'assigness 1'
      types: 'types 1'
      severity: 'severity 1'
      ticketstatus: 'ticketstatus 1'
    };
    
    // Make the API call
    service.GpDelete(ticketsId).subscribe(response => {
      expect(response).toEqual(tickets);
    });

    // Expect a DELETE request to the specified endpoint
    const req = httpMock.expectOne(`${sharedService.WEB_API}/tickets/`+ticketsId+`?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('DELETE');

    // Flush the mocked response
    req.flush(tickets);
  });


  // gp update the test case
  it('should send a PUT request to the server', () => {
    const tickets = { 
      _id: '12dsadsa', 
      name: 'name 1'
      assigness: 'assigness 1'
      types: 'types 1'
      severity: 'severity 1'
      ticketstatus: 'ticketstatus 1'
    };
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.GpUpdate(tickets).subscribe(response => {
      expect(response).toEqual(tickets);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/tickets?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(tickets);

    // Flush the mocked response
    req.flush(tickets);
  });











  
});
