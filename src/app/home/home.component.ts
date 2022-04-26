import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nodes! : number;
  malwareType! : string;
  malwareLevel! : string;
  nodeLevel! : string;

  constructor() { }

  ngOnInit(): void {
  }

  //returns the number of nodes
  getNodes() {

    //initialize to the number of nodes entered by the user
    var numNodes = parseInt((<HTMLInputElement>document.getElementById("nodes")).value);

    return numNodes;
  }

}
