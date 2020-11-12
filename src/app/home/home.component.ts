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

  @ViewChild('projectsLeft') projectsLeft: any;
  projectsLeftHtml: HTMLElement;
  @ViewChild('projectsRight') projectsRight: any;
  projectsRightHtml: HTMLElement;

  startX: number;

  windowWidth: number;
  windowHeight: number;


  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);

  }
   

  ngAfterViewInit(){
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    
    this.scrollHtml = this.scrollElement.nativeElement;
    this.portraitHtml = this.portraitElement.nativeElement;
    this.xpLeftHtml = this.xpLeft.nativeElement;
    this.xpRightHtml = this.xpRight.nativeElement;
    this.projectsLeftHtml = this.projectsLeft.nativeElement;
    this.projectsRightHtml = this.projectsRight.nativeElement;


    console.log('translate3d('+ window.innerWidth/2 + 'px,0px,0px)')
    console.log(window)

    this.xpRightHtml.style.transform = 'translate3d('+ window.innerWidth + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d('+ (-window.innerWidth) + 'px,0px,0px)';
/* 
    this.projectsRightHtml.style.transform = 'translate3d('+ window.innerWidth/2 + 'px,0px,0px)';
    this.projectsLeftHtml.style.transform = 'translate3d('+ (-window.innerWidth) + 'px,0px,0px)'; */
    this.startX = this.xpRightHtml.getBoundingClientRect().y;
    

  }
  


  ngOnDestroy(){
    window.removeEventListener('scroll', this.scrollEvent, true);

  }


  scrollEvent = (event: any): void => {
    /* console.log('I am scrolling')
    console.log('scrolly', window.scrollY)
 */

    const n = document.documentElement.scrollTop
 
    let rate = n * 1.2;
    this.scrollHtml.style.transform = 'translate3d(' + rate + 'px,0px,0px)';
    this.portraitHtml.style.transform = 'translate3d(' + -rate + 'px,0px,0px)'; 

    /* xp scroll */
    let xpRightatTop = this.xpRightHtml.getBoundingClientRect();
    let xpTopReached = xpRightatTop.y-window.innerHeight;
    let xpBotReached = xpRightatTop.bottom-window.innerHeight

/*     console.log(xpRightatTop)
    console.log(xpTopReached)
    console.log(xpBotReached) */
   /*  console.log(xpRightatTop) */

    console.log(xpTopReached)

    
/* van init érták: windowWidth/2 -> 0 */

/*     let xpRateRight = Math.max(xpTopReached+150, 0) +  -Math.min(xpBotReached+150, 0);
 */ 
      /* top reached -150  és 150 között a változó álljon 0ra */

    /*    xptopteached+25 - point at which element starts to fade in*/
    /*    *2 a scrolling speed*/
    /* topreached+150 -150 */
    /* topreached -150 nél windowWidth */
    /* topreached 400nál 0 */
   /*  topreached 0 akkor windowwidth */

   /* topreached -100 */

    /* azért nem tűnik el, mert alapból látszik, a topreached indig 0 */


/*     var xpRateLeft = (Math.max((this.windowWidth + (xpTopReached)*3), 0))
 */  console.log("xptop", (xpRightatTop), (this.windowWidth + (xpTopReached+150))*3, "scroll n ", n);
    console.log('ez a kezdő top érték', this.startX)
    var xpRateLeft = (Math.max((this.windowWidth + (xpTopReached)*3), 0)) -(Math.min((this.windowWidth + (xpBotReached)*3), 0))

   /*  if (xpTopReached <= -150){

      var xpRateLeft = (Math.max((this.windowWidth + (xpTopReached+150)*3), 0))

 } */

  /*   if (xpBotReached <= 150){
      var xpRateLeft = (Math.max(this.windowWidth/2 - n, 0))
    } */
/*     console.log('xprate', xpRateLeft)
 */



   /*  let xpRateLeft = -1*(Math.max(xpTopReached+150, 0) +  -Math.min(xpBotReached+150, 0)); */
 /*    console.log(xpRateRight,xpRateLeft) */
 
    this.xpRightHtml.style.transform = 'translate3d(' + xpRateLeft + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d(' + -xpRateLeft + 'px,0px,0px)';

    /* projects scroll */
 /*    let projectsRightatTop = this.projectsRightHtml.getBoundingClientRect();
    let projectsTopReached = projectsRightatTop.y-window.innerHeight;
    let projectsBotReached = projectsRightatTop.bottom-window.innerHeight


    let projectsRateRight = -1*(Math.max(projectsTopReached+150, 0) +  -Math.min(projectsBotReached+150, 0));
    let projectsRateLeft = Math.max(projectsTopReached+150, 0) +  -Math.min(projectsBotReached+150, 0);
    console.log(projectsRateRight,projectsRateLeft)

    this.projectsRightHtml.style.transform = 'translate3d(' + projectsRateRight + 'px,0px,0px)';
    this.projectsLeftHtml.style.transform = 'translate3d(' + projectsRateLeft*6 + 'px,0px,0px)';
 */
 
  } 

}


