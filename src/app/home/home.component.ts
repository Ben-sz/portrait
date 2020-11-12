import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';


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
  fadeValue: number;

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

    if (window.innerWidth > 950){
      this.fadeValue = window.innerWidth/2;
    }
    else{
      this.fadeValue = window.innerWidth/2;
    }

    this.xpRightHtml.style.transform = 'translate3d('+ this.fadeValue + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d('+ (-this.fadeValue) + 'px,0px,0px)';
/* 
    this.projectsRightHtml.style.transform = 'translate3d('+ window.innerWidth/2 + 'px,0px,0px)';
    this.projectsLeftHtml.style.transform = 'translate3d('+ (-window.innerWidth) + 'px,0px,0px)'; */
    this.startX = this.xpRightHtml.getBoundingClientRect().y - this.windowHeight;
    console.log('start',  this.startX )


  }
  


  ngOnDestroy(){
    window.removeEventListener('scroll', this.scrollEvent, true);

  }


  scrollEvent = (event: any): void => {

 

    const n = document.documentElement.scrollTop
 
    let rate = n * 1.2;
    this.scrollHtml.style.transform = 'translate3d(' + rate + 'px,0px,0px)';
    this.portraitHtml.style.transform = 'translate3d(' + -rate + 'px,0px,0px)'; 

    /* xp scroll */
    let xpBounding = this.xpRightHtml.getBoundingClientRect();
    let xpTopInView = xpBounding.y-window.innerHeight;
    let xpBotoutOfView = xpBounding.bottom-window.innerHeight
    console.log(xpBounding)

    /*    xpTopInView + x - point at which element starts to fade in*/
    /*    *2 a scrolling speed*/
    /* this.startX is used to reset to default when scrolling bac */


    if (this.fadeValue > 475){
      var xpRateLeft = (Math.max(this.fadeValue - n*2, 0)) -(Math.min((this.fadeValue-150 + (xpBotoutOfView)*1.2), 0));
    }
    else{
      var xpRateLeft = (Math.max(((this.fadeValue + (xpTopInView))), 0)) -(Math.min((this.fadeValue-150 + (xpBotoutOfView)*1.2), 0))
    }

  


    this.xpRightHtml.style.transform = 'translate3d(' + xpRateLeft + 'px,0px,0px)';
    this.xpLeftHtml.style.transform = 'translate3d(' + -xpRateLeft + 'px,0px,0px)';

    /* projects scroll */
    let projectsBounding = this.projectsLeftHtml.getBoundingClientRect();
    let projectsTopInView = projectsBounding.y-window.innerHeight;
    let projectsBotOutofView = projectsBounding.y+projectsBounding.height;


    var projectsRateRight = (Math.max((this.fadeValue + (projectsTopInView)*1.2), 0)) -(Math.min(( (projectsBotOutofView-200)*1.2 ), 0) );
     this.projectsRightHtml.style.transform = 'translate3d(' + projectsRateRight + 'px,0px,0px)';
      this.projectsLeftHtml.style.transform = 'translate3d(' + -projectsRateRight + 'px,0px,0px)';
 
  
  } 

}


