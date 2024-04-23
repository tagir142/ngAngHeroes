import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule,
  ],
})
export class HeroesComponent {
  heroes = HEROES
  selectedHero?:Hero;
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }
}
