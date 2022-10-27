import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Output() countEmitter = new EventEmitter<number>();

  count: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  countClick() {
    this.count++;
    this.emitCounter()
  }

  emitCounter() {
    this.countEmitter.emit(this.count)
  }
}
