import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.scss']
})
export class SearchGifComponent implements OnInit {

  currenField = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
