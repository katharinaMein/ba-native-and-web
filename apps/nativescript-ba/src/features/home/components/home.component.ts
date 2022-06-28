import {Component} from '@angular/core';
import {setStatusBarColor} from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  ngOnInit() {
    setStatusBarColor('light', 'transparent');
  }
}
