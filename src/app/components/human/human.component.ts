import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent implements OnInit {

  constructor() { }
  @Input() name!: string;
  @Input() bornDate!: string;


  ngOnInit(): void {
  }

}
