import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeHtml, SafeStyle, SafeScript } from '@angular/platform-browser';
import { Film } from '../interfaces/film';

@Pipe({
  name: 'safe'
})
export class UrlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){

  }


  transform(url:Film):SafeResourceUrl{

      console.log(this.sanitizer.bypassSecurityTrustResourceUrl(url.video+"?controls=0&autoplay=1"))
        return this.sanitizer.bypassSecurityTrustResourceUrl(url.video+"?controls=0&autoplay=1&mute=1&rel=0");

    }
  }


