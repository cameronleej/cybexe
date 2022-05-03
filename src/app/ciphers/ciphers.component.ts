import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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
    //this method is called to capture the values of the users text, and number of skips
    getText(){
      var input = (<HTMLInputElement>document.getElementById("inputText")).value;
      var skips = parseInt((<HTMLInputElement>document.getElementById("inputSkips")).value);

      console.log(input)
      var cipheredInput = cipherText(input,skips)
      console.log(cipheredInput)

      this.finalText = cipheredInput;

      // this code is for a fancy alert. Don't worry about it if you don't want to
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Text encoded!',
      showConfirmButton: false,
      timer: 1100
    })
    }
    
     /* To copy Text from Textbox */
     copyInputMessage(inputElement: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }){
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
    }

}


function cipherText(input: string, skips: number) {
  var myString = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  var shift = skips
  
  if(isNaN(skips)){
    //sets the shift to 0 if the user did not input a number of skips
    shift = 0;
  }
  var currChar = "";


  // TODO IMPLEMENT ACTUAL CAESAR CIPHER algorithm
  for (var i = 0; i < input.length; i++){
    var upperFlag = false;
    var currChar = input.charAt(i);

    if(!possible.includes(currChar.toLowerCase())){
      myString+=currChar//appends any special characters to the string
    }else{
      if(currChar != " "){//making sure to skip spaces from the user
        if(currChar == currChar.toUpperCase()){
          upperFlag = true;
        }
        var newIndex = (possible.indexOf(currChar.toLowerCase()) + shift)%26;
        
        var newLetter = possible.charAt(newIndex)
        
        if(upperFlag){ newLetter = newLetter.toUpperCase()};//if the upper flag was set, change the value to upper case
  
        myString += newLetter;//append new letter
  
      }else{
        myString+=" "
      }
    }
    
   
  }

  return myString
}

