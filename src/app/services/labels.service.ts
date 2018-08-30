import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor() { }

  navBarBtnLabels: string[] = ['Home', 'CMA Classes', 'Financial Services', 'About Rocky']
}
