import { Component, OnInit } from '@angular/core';
import { LabelsService } from '../../services/labels.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private btnLabels: LabelsService) { }

  ngOnInit() {
  }

  buttons: string[] = this.btnLabels.navBarBtnLabels;

}
