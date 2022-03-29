import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.css']
})
export class CiphersComponent implements OnInit {
  finalText:string | undefined;
  
  constructor() {

   }

  ngOnInit(): void {
   
  }
    getText(){
      var input = (<HTMLInputElement>document.getElementById("inputText")).value;
      console.log(input)
      var cipheredInput = cipherText(input)
      console.log(cipheredInput)

      this.finalText = cipheredInput;
    }
    
     /* To copy Text from Textbox */
     copyInputMessage(inputElement: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }){
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
    }

}


function cipherText(input: string) {
  var myString = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  var shift = 3/// ADD USER INPUT 
  var currChar = "";


  // TODO IMPLEMENT ACTUAL CAESAR CIPHER algorithm
  for (var i = 0; i < input.length; i++){
    var upperFlag = false;
    var currChar = input.charAt(i)
    
    if(currChar != " "){//making sure to skip spaces from the user
      if(currChar == currChar.toUpperCase()){
        upperFlag = true;
      }
      var newIndex = possible.indexOf(currChar.toLowerCase()) + shift;

      if(newIndex >= possible.length){
        var temp = newIndex - possible.length //geting the overflow length to circle back to the front
        newIndex = temp //settting the index
      }

      var newLetter = possible.charAt(newIndex)
      
      if(upperFlag){ newLetter = newLetter.toUpperCase()};//if the upper flag was set, change the value to upper case

      myString += newLetter;//append new letter

    }else{
      myString+=" "
    }
  }

  return myString
}

