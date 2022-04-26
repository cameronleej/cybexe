import { Device } from "./device.component";

export class Network{
    devices: Device[] = [];
   
    

    constructor(specs:(number|string)[]){
        var count:number;
        var level:string;
        level = String(specs[0]);
        count = Number(specs[1]);
        
      for (let i = 0; i<count; i++){
          this.devices.push(new Device(level));  // add new device w/ designated specs
      }
    }

    //returns list of all devices w/ infected status
    infectedNodes(){
        var infectedNodes: Device[] = [];
        for(let node of this.devices){
            if(node.isInfected())
                infectedNodes.push(node);
        };
        
        return infectedNodes;
    }

    cleanNodes(){
        var cleanNodes: Device[] = [];
        for(let node of this.devices){
            if(!node.isInfected())
            cleanNodes.push(node);
        };
        
        return cleanNodes;
    }

    recoveredNodes(){
        var recoveredNodes: Device[] = [];
        for(let node of this.devices){
            if(node.wasRecovered())
            recoveredNodes.push(node);
        };
        
        return recoveredNodes;
    }

    countInfected(){
        return this.infectedNodes().length;
    }

    countClean(){
        return this.cleanNodes().length;
    }

    countRecovered(){
        return this.cleanNodes().length;
    }
    getNodes(){
        return this.devices;
    }
}