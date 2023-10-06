import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetallticketsService } from './getalltickets.service';
import { SharedService } from '../../shared/shared.service';

describe('getallticketsService', () => {
  let service: GetallticketsService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ GetallticketsService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(GetallticketsService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  // get all types
  it('should retrieve all values getallseverity from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      name: 'name 1'
      assigness: 'assigness 1'
      types: 'types 1'
      severity: 'severity 1'
      ticketstatus: 'ticketstatus 1'
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${sharedService.WEB_API}/tickets?jwt_token=${jwtToken}`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GpGetAllValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });




  
});
