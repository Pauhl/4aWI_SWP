export default class Remote{

    isOn=false;

    setBattery(battery1, battery2) {
        this.battery1=battery1;
        this.battery2=battery2;
    }


    turnOn() {
        this.isOn=true;
        console.log("Remote is now on");
            this.battery1.chargingStatus-=5;
            this.battery2.chargingStatus-=5;
    }

    getStatus() {
        console.log(("Aktueller Akkustand: "+(this.battery1.chargingStatus+this.battery2.chargingStatus)/2)+"%");
    }


    hasPower() {
        let status=((this.battery1.chargingStatus+this.battery2.chargingStatus)/2);


        if (status>=50) {
            console.log("Genug Akku "+status+"%");
        }

        else {
            console.log("Akku niedrig "+status+"%")
        }
        
    }


    turnOff() {
        console.log("Remote is now off");
        this.isOn=false;
        
            
    }

    isItOn() {
        
        
        if (this.isOn==true) {
            console.log("Remote is on");
        } 
        
        
        else {


        console.log("Remote is off");
        }

    }



}

