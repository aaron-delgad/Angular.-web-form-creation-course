import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APIGIFService } from './../../../shared/service/apigif.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'form-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.scss']
})
export class SearchGifComponent implements OnInit {

  currenField = new FormControl();
  results: any[] = [];

  constructor(private readonly apigifService: APIGIFService) { }

  ngOnInit(): void {
    this.currenField.valueChanges
    .pipe(debounceTime(300))
    .subscribe(resp => {
      this.apigifService.getData(resp).subscribe(res => {
        this.results = res;
      });
    });
  }

}
