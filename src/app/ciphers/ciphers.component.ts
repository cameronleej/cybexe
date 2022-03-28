import { Component, OnInit } from '@angular/core';

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
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


  // TODO IMPLEMENT ACTUAL CAESAR CIPHER algorithm
  for (var i = 0; i < input.length; i++)
    if(input.charAt(i) != " "){
     myString += possible.charAt(Math.floor(Math.random() * possible.length));
    }else{
      myString+=" "
    }


  return myString
}

