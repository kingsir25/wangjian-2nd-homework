import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss']
})
export class GoodItemComponent implements OnInit {
  @Input() good:any
  @Output() goodClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.goodClick.emit(this.good)
  }
  ngOnInit() {
  }
}
