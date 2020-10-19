import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
