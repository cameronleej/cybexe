class AttackInstance{

    THRESHOLD:number = 0.65;
	deviceCount: number;
	devicesBreached: number;
	initialInfection: number;
	recCount: number;
	malwareSpecs: (string|number)[];
	networkSpecs: (string|number)[];
    results: number[];

    constructor(malSpecs, netSpecs) {
        this.malwareSpecs = malSpecs;
        this.networkSpecs = netSpecs;
    }

    execute(){
        this.devicesBreached = 0;
        var results: number[];
        
        //creates network with specified number of devices and device security level
		let network = new Network(this.networkSpecs);
		//creates malware of specified type with appropriate strength
		let malware = new Malware(this.malwareSpecs);
		
		/*	Simulates attack on network
			A single device is exposed. If it is breached, all other devices in the network are tested.
			Iterates through devices, compares malware atk score and device def score
			If atk score is greater, adds to devices breached and tests next device
			If def score is greater or equal, malware does not advance to the next device and the trial ends

			After all devices are tested, all infected devices are given the chance to be recovered
		*/
		if(malware.getAtk() > network.getNodes()[0].getDef()) // attack first device to see if network is breached
		{
			//attack all other devices on network
			network.getNodes()[0].infect();

            for(let machine of network.cleanNodes()){
                if (malware.getAtk()>machine.getDef())
                machine.infect();
            else
                break;
            }

			 var initialInfection = network.countInfected();
             
			//attempt to recover all infected devices
            for(let machine of network.infectedNodes()) {
                if(machine.getRec()>malware.getAtk())
					machine.recover();
            };

		}
	
        var devicesBreached = network.countInfected();
		var deviceCount = network.getNodes().length;

		//Calculates proportion of devices in network that were breached
		var penetration = this.devicesBreached/this.deviceCount;
		results.push(penetration);

        
		//If all devices were breached, return 1.0, else 0.0
	if(devicesBreached == deviceCount)
        results.push(1.0);
    else
        results.push(0.0);
    
    //Add random runtime to stop virus / infect all devices
    results.push(Math.random()*(initialInfection+network.countRecovered())*24);

    if(initialInfection != 0){
        var percentRecovered = network.countRecovered()/initialInfection;
        results.push(percentRecovered);
    }
    return results;
    }
}