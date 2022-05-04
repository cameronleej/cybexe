import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {
// class varibles used for returning on the front end
  newPassword!: string;
  strengthLevel!: string;
  myStrength!:string;

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * method called to capture the number of characters and create a random password
   */
  generatePass() {
    //capture the inputed number of characters by the user
    var numChars = parseInt((<HTMLInputElement>document.getElementById("inputChars")).value);
    //generate the password using algorithm
    this.newPassword = randomPass(numChars);
    this.strengthLevel = testStrength(this.newPassword);
    console.log(this.newPassword)

    // this code is for a fancy alert. Don't worry about it if you don't want to
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Password Generated!',
      showConfirmButton: false,
      timer: 1100
    })
  }
  /**
   * this method is called in the front end to set a password strength
   */
  testMyPass(){
    //user input password
    var myPass =(<HTMLInputElement>document.getElementById("passInput")).value;

    this.myStrength = testStrength(myPass);
  }
  /**
   * this is used for the "show" checkbox on the users inputted password
   */
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
/**
 * 
 * @param numChars takes in a number of characters specified by the user
 * @returns a random resulting string of the length of the specified characters
 */
function randomPass(numChars: number) {

  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&?%";
  var charactersLength = characters.length;
  //looping through the length specified 
  for (var i = 0; i < numChars; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //this line appends a random character from the list of usable characters 
    //and appends it to the resulting string
  }
  return result;
}

//returns low, med, high or na 
/**
 * 
 * @param password takes in any password, user based or created
 * @returns a strength level of "low", "med", or "high"
 */
function testStrength(password: string){

  var lengthScore = password.length;
  var upperScore = 0;
  var lowerScore = 0;
  var specialScore = 0;
  var digitScore = 0;

  //this calculates the strength of an inputted password based on whether or not a character matches each type
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

  //these are the score multipliers that are used to calculate the weight of each 
  //type of character
  upperScore = upperScore * 0.1;
  lowerScore = lowerScore * 0.1;
  specialScore = specialScore * 0.4;
  digitScore = digitScore * 0.2;
  lengthScore = lengthScore * 0.3;

  //the final score is each each score with it's multiplier added together
  var fullScore = lengthScore + upperScore + lowerScore + specialScore + digitScore;

  if(fullScore <= 4){
    return "low";
  }else if(fullScore > 4 && fullScore <= 8){
    return "med";
  }else if(fullScore > 8){
    return "high";
  }else{
    return "na"
  }



}

