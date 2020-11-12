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

    console.log(xpTopReached)

    /*    xptopteached+25 - point at which element starts to fade in*/
    /*    *2 a scrolling speed*/
    /* this.startX is used to reset to default when scrolling bac */
 
    console.log('ez a kezdő top érték', this.startX)
    var xpRateLeft = (Math.max((this.windowWidth + (xpTopReached)*3)+this.startX, 0)) -(Math.min((this.windowWidth + (xpBotReached)*3), 0))
    console.log("xptop", (this.windowWidth + (xpTopReached)*3), "scroll n ", n);

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


