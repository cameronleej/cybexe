import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {

  newPassword!: string;
  strengthLevel!: string;
  myStrength!:string;

  constructor() { }

  ngOnInit(): void {

  }

  generatePass() {
    //capture the inputed number of characters by the user
    var numChars = parseInt((<HTMLInputElement>document.getElementById("inputChars")).value);
    //generate the password using algorithm
    this.newPassword = randomPass(numChars);
    this.strengthLevel = testStrength(this.newPassword);
    console.log(this.newPassword)
  }
  testMyPass(){
    //user input password
    var myPass =(<HTMLInputElement>document.getElementById("passInput")).value;

    this.myStrength = testStrength(myPass);
  }
  showPass(){
  var x = (<HTMLInputElement>document.getElementById("passInput"));
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  }

}

//returns resulting randompassword from Math.random
function randomPass(numChars: number) {

  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&?%";
  var charactersLength = characters.length;
  for (var i = 0; i < numChars; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//returns low, med, high or na 
function testStrength(password: string){

  var lengthScore = password.length;
  var upperScore = 0;
  var lowerScore = 0;
  var specialScore = 0;
  var digitScore = 0;

  for (var i = 0; i < password.length; i++) {
    if (password.charAt(i).match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
      upperScore++;
    } else if (password.charAt(i).match(/[abcdefghijklmnopqrstuvwxyz]/)) {
      lowerScore++;
    } else if (password.charAt(i).match(/[!@$&#*?]/)) {
      specialScore++;
    } else if (password.charAt(i).match(/[0123456789]/)) {
      digitScore++;
    }
  }

  upperScore = upperScore * 0.1;
  lowerScore = lowerScore * 0.1;
  specialScore = specialScore * 0.4;
  digitScore = digitScore * 0.2;
  lengthScore = lengthScore * 0.3;

  var fullScore = lengthScore + upperScore + lowerScore + specialScore + digitScore;

  if(fullScore <= 3){
    return "low";
  }else if(fullScore > 3 && fullScore <= 7){
    return "med";
  }else if(fullScore > 7){
    return "high";
  }else{
    return "na"
  }



}

