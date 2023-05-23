import { Component, OnInit, HostBinding } from '@angular/core';
import { Pokemon, pokemon, Pokeball, pokeballList, throwItems } from './pokmeon';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css'],
  animations: [
    trigger('throw', [
      // ...
      state('yes', style({ position: 'absolute' })),
      transition('* => yes', [
        style({ transform: 'translate(-10rem, -5rem)', opacity : 1 }),
        animate('1.5s ease-in-out', style({ transform: 'translate(40rem, -40rem)',opacity : 1 }))
    ]),
    transition('* => yesMobile', [
      style({ transform: 'translate(-10rem, -5rem)', opacity : 1 }),
      animate('1.5s ease-in-out', style({ transform: 'translate(10rem, -20rem)',opacity : 1 }))
  ]),
    ]),
    trigger('rotatedState', [
      state('yes', style({ transform: 'rotate(0)' })),
      transition('* => eat1', [
        animate('.6s ease-in-out', style({ transform: 'rotate(-45deg)' })),
    ]),
    transition('eat1 => eat2', [
      animate('.6s ease-in-out', style({ transform: 'rotate(0)' })),
  ]),
  transition('eat2 => eat3', [
    animate('.6s ease-in-out', style({ transform: 'rotate(-45deg)' })),
])
  ]),

  trigger('angryState', [
    state('yes', style({ transform: 'rotate(0)' })),
    transition('* => angry1', [
      animate('.75s ease-in-out', style({ transform: 'rotate(-20deg)' })),
  ]),
  transition('angry1 => angry2', [
    animate('.75s ease-in-out', style({ transform: 'rotate(20deg)' })),
]),
transition('angry2 => angry3', [
  animate('.75s ease-in-out', style({ transform: 'rotate(-20deg)' })),
])
]),
trigger('initCatchState', [
  state('catch1', style({ transform: 'translateY(10rem)' })),
  transition('* => catch1', [
    animate(750, style({ transform: 'translateY(10rem)' })),
])
])
  ],
})
export class SafariComponent implements OnInit {

  constructor() { }
  safariList: Pokemon[] = pokemon;
  hasEntered: boolean = false;
  selectedPokemon: Pokemon | null = null;
  pokeballs: Pokeball[] = pokeballList;
  userPokeball: Pokeball | null = null;
  message: string = '';
  frame:number = 1;
  throw:string = '';
  throwPng: string = '';
  smokeFrame: number = 0;
  eat: string = '';
  angry: string = '';
  initCatch:string = '';
  caught: string = '';
  disabled: boolean = false;
  showModal: boolean = false;
  catchAni:boolean = false;
  isThrowing: boolean = false;
  expertMode: boolean = false;


  ngOnInit(): void {
    this.hasEntered = this.getLocalBoolean();
    this.userPokeball = this.pokeballs[0];
  }
  public enter(): void{
    this.hasEntered = true;
    localStorage.setItem('hasEntered', 'true');
  }

  private getLocalBoolean(): boolean {
    return localStorage.getItem('hasEntered') === 'true';
}

public async throwBall():Promise<void>{
  this.disabled = true;
  this.typingCallback('You used a '+ this.userPokeball?.name +'!');
  this.throwAnimation('ball');
  await this.delay(1700);
  this.isThrowing = false;
  this.catchAni = true;
  this.initCatchAnimation();
  //let animation finish
  await this.delay(800);
  this.throw = '';
  
  this.showModal = true;
  console.log(this.showModal);

}

  public async captured(){
    this.caught = 'caught';
    this.showModal = false;
    this.disabled = true;
    this.typingCallback('You caught the wild '+this.selectedPokemon?.name + '!');
    //catch animation
    await this.delay(750);
  }

  public async brokeOut(){
    this.showModal = false;
    this.catchAni = false;

    if(this.hasActionSucceeded(this.selectedPokemon?.catch!)){
      this.typingCallback(this.selectedPokemon?.name + ' is wathcing carefully!');
      await this.delay(1000);
      this.disabled =false;
    }else{
      this.fled()
    }
  }

public async bait():Promise<void>{
  this.disabled = true;
  this.typingCallback('You threw some bait!');
  this.throwAnimation('bait');
 
  //let animation finish
  await this.delay(1300);
  this.throw = '';
  this.isThrowing = false;
  if(this.hasActionSucceeded(this.selectedPokemon?.bait!)){
   
    var index = this.pokeballs.findIndex(x => x === this.userPokeball);
    if(index >= 3) index = 2;
    this.userPokeball = this.pokeballs[index + 1];
    this.typingCallback(this.selectedPokemon?.name + ' is eating!');
    this.eat = 'eat1';
    await this.delay(600);
    this.eat = 'eat2';
    await this.delay(600);
    this.eat = 'eat3';
    await this.delay(600);
    this.eat='';
    this.disabled =false;
  }else{
    this.fled()
  }
}

public async rock():Promise<void>{
  this.disabled = true;
  this.typingCallback('You thre a ROCK at the '+ this.selectedPokemon?.name +'!');
  this.throwAnimation('rock');
  //let animation finish
  await this.delay(1300);
  this.throw = '';
  this.isThrowing = false;
  if(this.hasActionSucceeded(this.selectedPokemon?.rock!)){
    this.typingCallback(this.selectedPokemon?.name + ' is angry! You can now use a status move!');
    this.angry = 'angry1';
    await this.delay(750);
    this.angry = 'angry2';
    await this.delay(750);
    this.angry = 'angry2';
    await this.delay(750);
    this.angry = '';
    this.disabled =false;
  }else{
    this.fled()
  }
  
}

private async fled():Promise<void>{
  this.fleeAnimation();
  this.typingCallback('Wild '+this.selectedPokemon?.name+' fled!');
  await this.delay(2000);
  this.userPokeball = this.pokeballs[0];
  this.disabled = false;
}

public run():void{
  this.fled();
}


private hasActionSucceeded(odds: number): boolean{
  console.log('expert mode:', this.expertMode);
  if(!this.expertMode){
      var decimalOdds = odds/100;
  console.log('decimalOdds:', decimalOdds)

  var outcome = Math.random();
  console.log('outcome:', outcome);
  console.log('results:', outcome <= decimalOdds);
  return outcome <= decimalOdds;
  }else{
    var decimalOdds = (odds/2)/100;
    console.log('expert decimalOdds:', decimalOdds)
  
    var outcome = Math.random();
    console.log('expert outcome:', outcome);
    console.log('expert results:', outcome <= decimalOdds);
    return outcome <= decimalOdds;
  }

  
}


private async throwAnimation(type: string): Promise<void>{
  
  await this.delay(150);
  this.frame =2;
  await this.delay(150);
  this.frame =3;
  await this.delay(150);
  this.frame =4;
  //based on click chosoe which object to throw
  await this.animateObject(type);
  await this.delay(150);
  this.frame =5;
  await this.delay(150);
  this.frame =1;
}

private async animateObject(type:string):Promise<void>{
if(type === 'ball'){
  this.throwPng = this.userPokeball?.png!;
}else{
  this.throwPng = throwItems.find(x => x.name === type)?.png!;
}
if(window.innerWidth > 500){
  this.throw ='yes';
}else{
  this.throw = 'yesMobile'
}

this.isThrowing = true;

console.log(this.throw);
}

private delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

public async huntChange(){
  this.disabled = true;
  this.catchAni = false;
  this.showModal = false;
  this.userPokeball = this.pokeballs[0];
  this.typingCallback('What will you do?');
  await this.delay(350)
  this.disabled = false;
}

private async typingCallback(message: string): Promise<void>{
  this.message = '';
  let total_length = message.length;
  let curr_length = this.message.length;
  var splitMessage = message.split('');

  while (curr_length < total_length) {
    this.message += splitMessage[curr_length];
    await this.delay(25)
    curr_length++;
  } 
}

private async fleeAnimation(): Promise<void>{
  await this.delay(150);
  this.smokeFrame =1;
  await this.delay(150);
  this.smokeFrame =2;
  await this.delay(150);
  this.smokeFrame =3;
  await this.delay(150);
  this.smokeFrame =4;
  await this.delay(150);
  this.smokeFrame =5;
  await this.delay(150);
  this.smokeFrame =6;
  await this.delay(150);
  this.selectedPokemon = null;
  this.smokeFrame = 0;
}

private async initCatchAnimation(){
  this.initCatch = 'catch1';
  this.delay(750);
}


public back(){
  console.log('back!')
  localStorage.setItem('hasEntered', 'false');
  location.reload();
}
}
