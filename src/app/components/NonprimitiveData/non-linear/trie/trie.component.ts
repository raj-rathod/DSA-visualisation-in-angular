import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { trieMetaData } from 'src/app/core/data-structures/non-linear/trie/trie-meta-data';

@Component({
  selector: 'app-trie',
  templateUrl: './trie.component.html',
  styleUrls: ['./trie.component.css']
})
export class TrieComponent implements OnInit {
  trieMetaData = trieMetaData
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
    this.location.back();
  }

}
