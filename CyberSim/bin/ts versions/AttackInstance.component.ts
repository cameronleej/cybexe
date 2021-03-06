import { Network } from "./network.component";
import { Malware } from "./malware.component";
/**
 * args - malSpecs[malwareType, malwareStrength], netSpecs[deviceStrength, nodeCount]
 * 
 * Public methods: execute()
 */
export class AttackInstance {

    THRESHOLD: number = 0.65;

    initialInfection: number = 0;
    recCount: number = 0;
    malwareSpecs: string[];
    networkSpecs: (string | number)[];
    results: number[] = [];

    constructor(malSpecs: string[], netSpecs: (number | string)[]) {
        this.malwareSpecs = malSpecs;
        this.networkSpecs = netSpecs;
    }

    /**
     *Comments : 	Simulates attack on network
            A single device is exposed. If it is breached, all other devices in the network are tested.
            Iterates through devices, compares malware atk score and device def score
            If atk score is greater, adds to devices breached and tests next device
            If def score is greater or equal, malware does not advance to the next device and the trial ends

            After all devices are tested, all infected devices are given the chance to be recovered


     * @returns [penetration: infected/count,  all devices breached?(1 or 0), time: semi-random, recovered: recovered/infected]
     */
    execute() {

        //creates network with specified number of devices and device security level
        let network = new Network(this.networkSpecs);
        //creates malware of specified type with appropriate strength
        let malware = new Malware(this.malwareSpecs);

        var scores:number[] = [];
        for(let i of network.getNodes())
            scores.push(i.getDef());
       

        if (malware.getAtk() > network.getNodes()[0].getDef()) // attack first device to see if network is breached
        {
            network.getNodes()[0].infect();
            
            //attack all other devices on network
            for (let machine of network.cleanNodes()) {
                if (malware.getAtk() > machine.getDef())
                    machine.infect();
                else
                    break;
            }

            this.initialInfection = network.countInfected();

            //attempt to recover all infected devices
            for (let machine of network.infectedNodes()) {
                if (machine.getRec() > malware.getAtk())
                    machine.recover();
            };

        }

        var devicesBreached: number = network.countInfected();
        var deviceCount: number = network.getNodes().length;


        //Calculates proportion of devices in network that were breached
        var penetration: number = this.initialInfection / deviceCount;
        this.results.push(penetration);



        //If all devices were breached, return 1.0, else 0.0
        if (devicesBreached == deviceCount)
            this.results.push(1.0);
        else
            this.results.push(0.0);

        //Add random runtime to stop virus / infect all devices
        this.results.push(Math.random() * (this.initialInfection + network.countRecovered()) * 24);

        //If devices were breached
        if (this.initialInfection != 0) {

            var percentRecovered = network.countRecovered() / this.initialInfection;
            this.results.push(percentRecovered);
        }
        //penetration: infected/count,  all devices breached?(1 or 0), time: semi-random, recovered: recovered/infected
        return this.results;
    }
}