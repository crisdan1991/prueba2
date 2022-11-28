import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { ServiceService } from './service.service';

describe('ServiceService', () => {

  let service: ServiceService;

  beforeEach(async () => {
    TestBed.configureTestingModule({providers:[HttpHandler,HttpClient]});
    service = TestBed.inject(ServiceService);
  });


  it('should get serice', () => {
    service = TestBed.inject(ServiceService);
    const result = service.getPersonas();
    expect(result).toBeTruthy();
    let respuesta;
    service.getPersonas().subscribe(res=> {
      respuesta = res
      }, (error) => {
      console.log(error);
      });
    console.log(respuesta);
  });

});
