

{

    var computer = 0;
    var user = 0;



    const input = () => {
        let n = prompt("Enter Your Choice(IN CAPS) \n1. SNAKE\n2.WATER\n3.GUN");
        return n;
    }


    // for userInput == snake
    const snake = (comp) => {
        if (comp == 2) {
            prompt("USER        COMPUTER\nSNAKE        WATER\nUSER WINS")
            user += 1
        } else if (comp == 3) {
            prompt("USER        COMPUTER\nSNAKE        GUN\nCOMPUTER WINS")
            computer += 1
        } else {
            prompt("USER        COMPUTER\nSNAKE        SNAKE\nDRAW")
        }
        document.getElementById("me").innerHTML = user;
        document.getElementById("computer").innerHTML = computer;
    }
    
    // for userInput == water
    const water = (comp) => {
        if (comp == 3) {
            prompt("USER        COMPUTER\nWATER        GUN\nUSER WINS")
            user += 1
        } else if (comp == 1) {
            prompt("USER        COMPUTER\nWATER        SNAKE\nCOMPUTER WINS")
            computer += 1
        }else{
            prompt("USER        COMPUTER\nWATER        WATER\nDRAW")
        }
        document.getElementById("me").innerHTML = user;
        document.getElementById("computer").innerHTML = computer;
    }
    
    
    // for userInput == gun
    const gun = (comp) => {
        if (comp == 1) {
            prompt("USER        COMPUTER\nGUN        SNAKE\nUSER WINS")
            user += 1
        } else if (comp == 2) {
            prompt("USER        COMPUTER\nGUN        WATER\nCOMPUTER WINS")
            computer += 1
        }else{
            prompt("USER        COMPUTER\nGUN        GUN\nDRAW");
        }
        document.getElementById("me").innerHTML = user;
        document.getElementById("computer").innerHTML = computer;
    }
    
    
    function main() {
        let n = input()
        if ((n == "SNAKE") || (n == "WATER") || (n == "GUN")) {
            if (confirm("Your choice was:\n" + n)) {
                let rndom = (Math.ceil(Math.random() * 3));
                console.log(rndom);

                // if rndom == 1  then it is (SNAKE)
                // if rndom == 2  then it is (WATER)
                // if rndom == 3  then it is (GUN)

                if (n == "SNAKE") {
                    snake(rndom);
                }


                else if (n == "WATER") {
                    water(rndom);
                }


                else if (n == "GUN") {
                    gun(rndom);
                }
            }
        } else {

            alert("Wrong Input");

        }
    }

}