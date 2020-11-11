import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('scrollElement') scrollElement: any;
  scrollHtml: HTMLElement;
  @ViewChild('portrait') portraitElement: any;
  portraitHtml: HTMLElement;
  @ViewChild('xpLeft') xpLeft: any;
  xpLeftHtml: HTMLElement;
  @ViewChild('xpRight') xpRight: any;
  xpRightHtml: HTMLElement;


  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);

  }
   

  ngAfterViewInit(){
    

    this.scrollHtml = this.scrollElement.nativeElement;
    this.portraitHtml = this.portraitElement.nativeElement;
    this.xpLeftHtml = this.xpLeft.nativeElement;
    this.xpRightHtml = this.xpRight.nativeElement;


    this.xpRightHtml.style.transform = 'translate3d('+ window.innerWidth + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d'+ -window.innerWidth + 'px,0px,0px)';
  }
  


  ngOnDestroy(){
    window.removeEventListener('scroll', this.scrollEvent, true);

  }


  scrollEvent = (event: any): void => {
    /* console.log('I am scrolling')
    console.log('scrolly', window.scrollY)
 */

    const n = document.documentElement.scrollTop
  
    console.log('scrollhtml', this.xpRightHtml.getBoundingClientRect())
    

   /*  console.log(n) */
 
    let rate = n * 1.2;
    this.scrollHtml.style.transform = 'translate3d(' + rate+ 'px,0px,0px)';
    this.portraitHtml.style.transform = 'translate3d(' + -rate + 'px,0px,0px)'; 

    /* xp scroll */


    let xpRightatTop = this.xpRightHtml.getBoundingClientRect();
    let xpRightatBottom = xpRightatTop.y-window.innerHeight;
    console.log('xp', xpRightatBottom)




    let xpRateRight =   Math.max(window.innerWidth-(n*3) , 0) + -1*Math.min(1600*1.7-(n*1.7) , 0);
    /* console.log(xpRateRight) */
    let xpRateLeft =   Math.max(window.innerWidth-(n*3) , 0) - -1*Math.min(1600*1.7-(n*1.7) , 0);
/* 
    this.xpRightHtml.style.transform = 'translate3d(' + xpRateRight + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d(' + -xpRateLeft + 'px,0px,0px)'; */
 
  } 



}
