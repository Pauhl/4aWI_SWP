

let monatdauer;
let start=1;
let monatname;
let o = 0;


for (var i = 1; i <= 12; i++) {

    switch (i) {
        case 1:
            monatdauer = 31;
            
            monatname = "Jänner";
            break;
        case 2:
            monatdauer = 28;
            
            monatname = "Februar";
            break;
        case 3:
            monatdauer = 31;
           
            monatname = "März";
            break;
        case 4:
            monatdauer = 30;
            
            monatname = "April";
            break;
        case 5:
            monatdauer = 31;
            
            monatname = "Mai";
            break;


        case 6:
            monatdauer = 30;
            
            monatname = "Juni";
            break;
        case 7:
            monatdauer = 31;
           
            monatname = "Juli";
            break;
        case 8:
            monatdauer = 31;
            
            monatname = "August";
            break;
        case 9:
            monatdauer = 30;
           
            monatname = "September";
            break;
            
        case 10:
            monatdauer = 31;
          
            monatname = "Oktober";
            break;
        case 11:
            monatdauer = 30;
           
            monatname = "November";
            break;
        case 12:
            monatdauer = 31;
            
            monatname = "Dezember";
            break;


    }

    abc();
}




function abc() {
    console.log(monatname);
    console.log(" ");

    console.log("| MO | DI | MI | DO | FR | SA | SO |")





    let i = 1;

    start++;


    let a = "";
    while (i < start) {

        

        if (i == 1) {
            a += "|    |";
        }
        else {
            a += "    |"
        }
        i++;

    }

    if (start == 1) {
        a += "|";
    }


    while ((i - start) < monatdauer) {



        if ((i - 1) % 7 == 6 || (i - 1) % 7 == 5) {
            if (i > (8 + start)) {
                a += " " + "WE"+ " |";
            }
            else {
                a += " " + "WE" + " |";

            }
        }

        else {
            if (i > (8 + start)) {
                a += " " + (i - start + 1) + " |";
            }
            else {
                a += " " + (i - start + 1) + "  |";

            }
        }
        i++;
        if ((i - 1) % 7 == 0 && (i - start) !== monatdauer) {
            console.log(a);
            a = "|"
        }

    }


    if ((monatdauer + start - 1) % 7 !== 0) {
        for (e = 0; e < (7 - (monatdauer + start - 1) % 7); e++) {
            a += "    |";
            o++;

        }
    }
    console.log(a);
    console.log(" ");
    console.log(" ");

    start = o;
    o = 0;
    
    
}

abc();