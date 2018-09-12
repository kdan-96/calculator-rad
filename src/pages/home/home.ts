import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private firstNum : string;
  private secondNum : string;
  private finalRes: string;
  private a: number;
  private b: number;

  constructor(public navCtrl: NavController) {

  }

  addNum(){
    
    this.a=(parseInt(this.firstNum)+parseInt(this.secondNum));
    alert(this.a);
  }

  minNum(){
    this.b=(parseInt(this.firstNum)-parseInt(this.secondNum));
    alert(this.b);
  }

}
