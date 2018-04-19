import { Pipe, PipeTransform } from '@angular/core';
import { Campaign } from './shared/models/campaign.model';

@Pipe({
  name: 'filterCampaings'
})
export class FilterPipe implements PipeTransform {

  transform(values: Campaign[], category: string): Campaign[] {
    return (category !== 'all') ? values.filter(c => c.categories.includes(category)) : values;
  }

}
