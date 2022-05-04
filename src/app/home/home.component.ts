import { Component, OnInit } from '@angular/core';
import { Simulation } from 'CyberSim/bin/ts versions/simulation.component';
import { retry } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//these are the class variables for the 4 parameters on the simulation
  nodes! : number;
  malwareType! : string;
  malwareLevel! : string;
  nodeLevel! : string;

  //these are for printing to webpage purposes
  devicesInfected!:number;
  networkComp!:number;
  runTime!:number;
  recovered!:number;
  secLevel!:string;

  malwareResponse!:string;
  malLevelResponse!:string;
  securityResponse!:string;
  

  

  constructor() { }

  ngOnInit(): void {
  }

  //runs the simulation
  /**
   * @returns an array of 4 elements that correspond to the infected devices, entire network comprimised, runtime, and
   * recovered devices
   */
  runButton() {
    //initializing inputs
    var malwareType = (<HTMLInputElement>document.getElementById("malType")).value;
    var malwareLevel = (<HTMLInputElement>document.getElementById("malLevel")).value;
    var deviceLevel = (<HTMLInputElement>document.getElementById("secLevel")).value;
    var numberOfNodes = parseInt((<HTMLInputElement>document.getElementById("nodes")).value);

    this.nodes = numberOfNodes;
    this.secLevel = deviceLevel;

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
    this.malLevelResponse = this.printMalwareLevel(malwareLevel);
    
    this.securityResponse = this.printSecurityLevel(deviceLevel);


    // this code is for a fancy alert. Don't worry about it if you don't want to
    Swal.fire({
      icon: 'success',
      title: 'Simulation has been run!',
      showConfirmButton: false,
      timer: 1100
    })

    return results;
  }

  /**
   * 
   * @returns a list of the length of the number of nodes for ng for loop 
   */
  nodeList() {
    let list = new Array(this.nodes);

    for(let i = 0; i < this.nodes; i++) {
      list[i] = i;
    }

    return list;
  }

/**
 * 
 * @returns the calculated number of devices that were actually infected after recovery
 */
  actualInfected() {
    var recov = (this.recovered/100)*this.nodes;
    var raw = (this.devicesInfected/100)*this.nodes;
    var real = raw - recov;
    if(this.devicesInfected == 0)real = 0;

    return real;
  }

  /**
   * 
   * @returns the remaining number of nodes that weren't infected
   */
  leftoverNodes() {
    return this.nodes - this.actualInfected();
  }
 
  
/**
 * Method used to display the help popup
 */
  helpAlert() {
    Swal.fire({
      title: 'Don\'t worry!',
      html: 'This site is meant to run a very simple cybersecurity simulation based on parameters that you can enter on the sidebar. <br>'+
      '<ul>'+
      '<li>Enter the number of nodes on the network.</li>'+
      '<li>Enter the type of malware you\'d like to test.</li>'+
      '<li>Enter the \"level\" of malware. Basically, how dangerous it is.</li>'+
      '<li>Enter the network\'s security level</li>'+
      '</ul>',
      icon: 'info',
      confirmButtonColor: "#5b787e"
    });
  }


  //this method is called to set the value of the malware 
  //response in the information secion of the simulation
  /**
   * 
   * @param type string that is the type of malware
   * @returns a string of the description of each malware type
   */
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
        return `Ransomware is a type of malware that when executed encypts some or all of the files on a computer
                 until money or something of value to the hacker, is given up.`
      case "worm":
        return `A Worm is a type of malware that replicates itself to step through a 
                computer or systems network. Unlike a virus, worms do not need a host or human interaction to duplcate. 
                Worms can perform various actions, but the most common
                are stealing data, using system resources, or creating backdoors into systems.`
      default:
        return "A Malware Type was not given..."

    }
  }

  /**
   * 
   * @param level string is the level malware "low, med or high"
   * @returns description of each malware level
   */
  printMalwareLevel(level:string):string{
    level = level.toLowerCase();
    switch(level){
      case "low":
        return `A low level of attack is one where any computer is capable of fighting off. Mostly, it's up to 
                the user to refrain from clicking a link, or an ad that contains the malware.`
      case "med":
        return `A medium level of attack is one where the computer or system is not as able to fight it off. 
                This could be something that does a noticable amount of damage to a network.`
      case "high":
        return `A high level of attack is incredibly hard to fight off, and even the most experienced user 
                of technology can be susceptible to this kind. These are often undetected, and destructive at their worst.`
      default:
        return "Malware Level not given"
    }
  }

  /**
   * 
   * @param level string that is the level of security in the network
   * @returns a string of a description of the low, med, or high security level properties
   */
  printSecurityLevel(level:string):string{
    level = level.toLowerCase();
    switch(level){
      case "low":
        return `A low level of device security mean there is no anti-virus software on the device,
                and it runs a HIGH risk of being attacked leaving the network vulnerable to 
                various types of malware. `
      case "med":
        return `A medium level of security means that the network has some security measures in place, like a software
                or data encryption, but still having some vulnerabilities.`
      case "high":
        return `A high level of security means that the defenses on the network are strong, and can easily detect
                any type of malware and defend itself. High levels of security are difficult to be penetrated,
                and rarely encounter infection.`
      default:
        return "Security Level not given"
    }
  }

  
}
