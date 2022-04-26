class Simulation{
    runData: (number[])[];
	avgData: number[]; //originally object array
    fullBreach: number[];
    runTime: number[];
	penetration: number[];
	recovery: number[];
    malSpecs: string[];
    netSpecs:(number|string)[];
    constructor(runSpecs:(number|string)[]){

        var type:string = String(runSpecs[0]);

        this.malSpecs.push(type);


        var atkLevel:string = String(runSpecs[1]);

        this.malSpecs.push(atkLevel);

        var defLevel:string = String(runSpecs[2]);

        this.netSpecs.push(defLevel);

        var nodeCount:number = Number(runSpecs[3]);

        this.netSpecs.push(nodeCount);

    }

    run(){
		
		//Runs 20 trials, placing each list of results into a nested list
		for(let i = 0; i<20; i++) {
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
		this.avgData.push(Math.round(this.Average(this.runTime)));
		this.avgData.push(this.percent(this.Average(this.fullBreach)));
		if(this.recovery.length!=0)
        this.avgData.push(this.percent(this.Average(this.recovery)));
		else
        this.avgData.push(null);
		
		return this.avgData;
	}
	
	//Take the average of a list of doubles
	Average(vals:number[]) {
		var average = 0;
		var total = 0;
		
		for(let num of vals)
			total += num;
		average = total/vals.length;
		
		return average;
	}
	
	//Converts from decimal to percent
	percent(value:number) {
	    return parseFloat((Math.round(value*100)).toFixed(2));
	}
    
}