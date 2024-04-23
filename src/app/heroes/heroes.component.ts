import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AppModule } from '../app.module'
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [ AppModule, NgFor, NgIf, UpperCasePipe, FormsModule,
  ],
})
export class HeroesComponent {
  heroes : Hero[]=[]
  selectedHero?:Hero;
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }
  constructor(private heroService: HeroService) {

  }

  getHeroes():void {
    this.heroes = this.heroService.getHeroes()
  }
  ngOnInit():void{
    this.getHeroes()
  }
}
