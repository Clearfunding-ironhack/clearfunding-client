import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(campaigns: any, selectedCategory: any): any {
    if(selectedCategory) {return campaigns;}
    return campaigns.filter(campaign => { campaigns.categories.includes(selectedCategory))
    })
  }

}
