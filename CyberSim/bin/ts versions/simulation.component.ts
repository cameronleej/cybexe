import { AttackInstance } from "./AttackInstance.component";

/**
 * Args: runSpecs - [malware type, malware strength, network security level, network node count]
 * 
 * Public methods: Run()
 */
export class Simulation{
    runData: (number[])[] = [];
	avgData: number[] = []; //originally object array
    fullBreach: number[] = [];
    runTime: number[] = [];
	penetration: number[] = [];
	recovery: number[] = [];
    malSpecs: string[] = [];
    netSpecs:(number|string)[] = [];


    constructor(runSpecs:(number|string)[]){

        this.malSpecs.push(String(runSpecs[0]));
        this.malSpecs.push(String(runSpecs[1]));

        this.netSpecs.push(String(runSpecs[2]));
        this.netSpecs.push(String(runSpecs[3]));

    }
	/**
	 * Comments: Execute 20 attackInstance trials, stores, parses, and averages results
	 * 
	 * @returns List[Average % initail breach, % of trials resulting in all devices being infected, 
	 * 				estimated time to complete process, % of infected devices recovered] 
	 */

    run(){
		//Runs 20 trials, placing each list of results into a nested list
		for(let i = 0; i<30; i++) {
			let attack = new AttackInstance(this.malSpecs, this.netSpecs);
			this.runData.push(attack.execute());
		}
		
		//Creates list of individual attributes from each run
		for(let run of this.runData)
		{	
			this.penetration.push(run[0]);
			this.fullBreach.push(run[1]);
			this.runTime.push(run[2]);
			if(run.length>3 && run[3]!=null)
            this.recovery.push(run[3]);
			
		}
		

		//Calculates probability of full breach, average runtime, and average % breach
		this.avgData.push(this.percent(this.Average(this.penetration)));
		this.avgData.push(this.percent(this.Average(this.fullBreach)));
		this.avgData.push(Math.round(this.Average(this.runTime)));
		if(this.recovery.length!=0)
        this.avgData.push(this.percent(this.Average(this.recovery)));
		else
        this.avgData.push(-1);
		
		return this.avgData;
	}
	/**
	 * 
	 * @param vals - list of numbers to be averaged
	 * @returns average of vals, not rounded
	 */
	private Average(vals:number[]) {
		var average = 0;
		var total = 0;
		
		for(let num of vals)
			total += num;
		average = total/vals.length;
		
		return average;
	}
	
	/**
	 * 
	 * @param value - number to be converted to a percentage
	 * @returns value as a decimal, rounded to the nearest whole number
	 */
	private percent(value:number) {
	    return parseFloat((Math.round(value*100)).toFixed(2));
	}
    
}