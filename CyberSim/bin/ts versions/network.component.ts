import { Device } from "./device.component";
/**
 * Args - specs=[number of nodes, strength level]
 * 
 * public methods: infectedNodes(), cleanNodes(), recoveredNodes(), countInfected(), countRecovered(), getNodes()
 */
export class Network {
    devices: Device[] = [];
    
    constructor(specs: (number | string)[]) {
        var count: number;
        var level: string;
        level = String(specs[0]);
        count = Number(specs[1]);

        for (let i = 0; i < count; i++) {
            this.devices.push(new Device(level));  // add new device w/ designated specs
        }
    }

    /**
     * 
     * @returns a list of all devices with the infected status
     */
    infectedNodes() {
        var infectedNodes: Device[] = [];
        for (let node of this.devices) {
            if (node.isInfected())
                infectedNodes.push(node);
        };

        return infectedNodes;
    }

    /**
     * 
     * @returns a list of all devices without the infected status
     */
    cleanNodes() {
        var cleanNodes: Device[] = [];
        for (let node of this.devices) {
            if (!node.isInfected())
                cleanNodes.push(node);
        };

        return cleanNodes;
    }

    /**
     * 
     * @returns a list of all devices with the recoved status
     */
    recoveredNodes() {
        var recoveredNodes: Device[] = [];
        for (let node of this.devices) {
            if (node.wasRecovered())
                recoveredNodes.push(node);
        };

        return recoveredNodes;
    }

    //Returns count of infected devices
    countInfected() {
        return this.infectedNodes().length;
    }

    //returns count of recovered devices
    countRecovered() {
        return this.recoveredNodes().length;
    }

    //returns list of all devices in network
    getNodes() {
        return this.devices;
    }
}