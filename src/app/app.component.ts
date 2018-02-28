import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    scInput1:number = 0; // First number in simple calc
    scOperator:string = ''; // Operator for simple calc
    scInput2:number = 0; // Second number in simple calc
    acInput:string = ''; // String for advanced calc 

    scOutput:number;
    acOutput:number;

    calc() {
        console.log(this.scOperator);

        if (this.scOperator == "+") this.scOutput = this.scInput1 + this.scInput2;
        
        else if (this.scOperator == "-") this.scOutput = this.scInput1 - this.scInput2;

        else if (this.scOperator == "*") this.scOutput = this.scInput1 * this.scInput2;

        else if (this.scOperator == "/") this.scOutput = this.scInput1 / this.scInput2;

        else console.log('Error: Choose an operator');

        return this.scOutput;
    }

    advCalc() {
        this.acOutput = math.eval(this.acInput);
        return this.acOutput;
    }
}
