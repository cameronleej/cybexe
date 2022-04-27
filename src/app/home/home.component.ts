import { Component, OnInit } from '@angular/core';
import { Simulation } from 'CyberSim/bin/ts versions/simulation.component';


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

  //runs the simulation
  runButton() {
    //initializing inputs
    var malwareType = (<HTMLInputElement>document.getElementById("malType")).value;
    var malwareLevel = (<HTMLInputElement>document.getElementById("malLevel")).value;
    var deviceLevel = (<HTMLInputElement>document.getElementById("secLevel")).value;
    var numberOfNodes = parseInt((<HTMLInputElement>document.getElementById("nodes")).value);

    console.log(malwareType);
    console.log(malwareLevel);
    console.log(deviceLevel);
    console.log(numberOfNodes);


    var args: (string|number)[] = [malwareType, malwareLevel, deviceLevel, numberOfNodes];


    var sim = new Simulation(args);
    var results = sim.run();

    console.log("percent of devices infected: " + results[0]);
    console.log("Percent where the entire netowrk was compromised: " + results[1]);
    console.log("Estimated run-time: " + results[2]);
    console.log("percent of infected devices that recovered: " + results[3]);

    return results;
  }

}
