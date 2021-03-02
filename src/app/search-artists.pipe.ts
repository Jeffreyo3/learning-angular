import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists',
})
export class SearchArtistsPipe implements PipeTransform {
  transform(pipeData, pipeModifier): any {
    return pipeData.filter((p) => {
      return (
        p.name.toLowerCase().includes(pipeModifier.toLowerCase()) ||
        p.reknown.toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }
}
