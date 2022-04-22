import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameCreated = new EventEmitter< number>();
  counterInput = 0;
  interval;
  
  
  constructor() { }

  ngOnInit(): void {
  }
   onGameStart(){
    this.interval= setInterval(() => {
      this.gameCreated.emit(this.counterInput ++);
    }, 1000);    
   }

   stopGame(){
    clearInterval(this.interval);
  }

}
