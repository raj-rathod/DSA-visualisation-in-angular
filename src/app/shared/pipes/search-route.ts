import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkData } from '../interfaces/meta-data.interface';

@Pipe({
  name: 'searchRoute'
})
export class SearchRoutePipe implements PipeTransform {
  transform(items: RouterLinkData[], searchText: string): RouterLinkData[]{
    items.sort();
    if (!items){
      return [];
    }
    if (!searchText){
      return items;
    }
    return items.filter(item => item?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}