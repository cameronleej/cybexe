export class Device{
    level: string = "";
    defScore: number =0;
    recScore: number= 0; //Ability to recover infected device
    infected: boolean = false;
    recovered: boolean = false;

    constructor(level:string){
        this.level = level;
        this.defScore = this.defLevel(level);
        this.recScore = this.recLevel(level);
    }

    //Getter Methods
	getLevel() {
		return this.level;
	}
	
	getDef() {
		return this.defScore;
	}

    getRec() {
		return this.recScore;
	}

    isInfected(){
        return this.infected;
    }

    wasRecovered(){
        return this.recovered;
    }

    defLevel(level:string){
        //console.log(level);
        switch(level.toLowerCase()) { // orignally 50->75->100
			case "low": this.defScore =  30 + Math.random()*20; // 30-50
				break;
			case "med": this.defScore = 45 + Math.random()*30; // 45-75
				break;
			case "high": this.defScore =  70 + Math.random()*20; // 70-90
				break;
			default: 
				return -1;
		}
		return this.defScore;
    }

    recLevel(level:string) {
		
		switch(level.toLowerCase()) {
			case "low": this.recScore =  30 + Math.random()*15; // 30-45
				break;
			case "med": this.recScore = 50 + Math.random()*25; // 50-75
				break;
			case "high": this.recScore = 70 + Math.random()*20; // 70-90
				break;
			default: 
				return -1;
		}
		return this.recScore;
    }

    recover(){
        this.recovered = true;
        this.infected = false;
    }

    infect(){
        this.infected = true;
    }
}