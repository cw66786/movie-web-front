import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
