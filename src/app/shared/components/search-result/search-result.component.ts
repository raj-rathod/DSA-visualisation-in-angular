import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchResult } from '../../interfaces/search-result.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<SearchResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchResult
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

}
