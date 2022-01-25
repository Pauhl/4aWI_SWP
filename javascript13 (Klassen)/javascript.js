import Battery from './battery.js';
import Remote from './remote.js';



let remote = new Remote();
let battery1 = new Battery();
let battery2 = new Battery();

remote.setBattery(battery1, battery2);


remote.getStatus();
remote.turnOn();
remote.turnOn(); 
remote.turnOff(); 
remote.turnOn(); 
remote.getStatus();
remote.hasPower();
remote.getStatus();
remote.turnOn();
remote.turnOn(); 
remote.turnOff();
remote.isItOn(); 
remote.turnOn(); 
remote.getStatus();
remote.hasPower();
remote.turnOn();
remote.turnOn();
remote.turnOn();
remote.turnOn();
remote.turnOn();
remote.turnOn();
remote.isItOn(); 
remote.getStatus();
remote.hasPower();