import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
