class Device{
    level: string;
    defScore: number;
    recScore: number;; //Ability to recover infected device
    infected: boolean = false;
    recovered: boolean = false;

    constructor(level){
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
        switch(level.toLowerCase()) { // orignally 50->75->100
			case "low": this.defScore =  45 + Math.random()*15; // 45-60
				break;
			case "moderate": this.defScore = 60 + Math.random()*15; // 60-75
				break;
			case "high": this.defScore = 80 + Math.random()*15; // 80-95
				break;
			default: 
				return -1;
		}
		return this.defScore;
    }

    recLevel(level:string) {
		
		switch(level.toLowerCase()) {
			case "low": this.recScore =  45 + Math.random()*15; // 45-60
				break;
			case "moderate": this.recScore = 60 + Math.random()*15; // 60-75
				break;
			case "high": this.recScore = 80 + Math.random()*15; // 80-95
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