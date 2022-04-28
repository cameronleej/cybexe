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
  //these are for printing to webpage purposes
  devicesInfected!:number;
  networkComp!:number;
  runTime!:number;
  recovered!:number;

  malwareResponse!:string;
  malLevelResponse!:string;
  securityResponse!:string;

  isVirus: string = `A Virus is an executable computer program that moves malicious code into the computer of its victims
              , and spreads by repeating itself. These are one of the most common types of attacks, and preventing them
              is difficult.`;
  
  

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


    //setting the variables to the corresponding values for the front end
    this.devicesInfected = results[0];
    this.networkComp = results[1];
    this.runTime = results[2];
    this.recovered = results[3];


    //this is used to print out the given parameters
    this.malwareType = malwareType;
    this.malwareResponse = this.printMalware(malwareType);

    this.malwareLevel = malwareLevel;


    return results;
  }

  //this method is called to set the value of the malware 
  //response in the information secion of the simulation
  printMalware(type:string):string{
    type = type.toLowerCase();
    switch(type){
      case "virus":
        return `A Virus is an executable computer program that moves malicious code into the computer of its victims
        , and spreads by repeating itself. These are one of the most common types of attacks, and preventing them
        is difficult.`;
      case "trojan":
        return `A Trojan is a type of malware that looks like something familiar or trustworthy that, when clicked or executed,
                it will steal information, disrupt, or even destroy your computer.`
      case "ransomware":
        return `Ransomware is a type of malware that when executed stops, freezes, or blocks off access
                to your computer until money or something value to the hacker, is given up. This is 
                special because of the hackers intentions, sometimes they have different motives than just 
                breaking the device.`
      case "worm":
        return `A Worm in computer terms is a type of Trojan Horse that replicates itself to step through a 
                computer or systems network. These types of malware are used to steal data, remove usage of hard drive space, 
                and overpower networks so that they cannot be used correctly. `
      default:
        return "A Malware Type was not given..."

    }
  }

  
}
