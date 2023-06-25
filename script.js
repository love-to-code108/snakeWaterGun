

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
            alert("USER        COMPUTER\nSNAKE        WATER\n\nUSER WINS")
            user += 1
        } else if (comp == 3) {
            alert("USER        COMPUTER\nSNAKE        GUN\n\nCOMPUTER WINS")
            computer += 1
        } else {
            alert("USER        COMPUTER\nSNAKE        SNAKE\n\nDRAW")
        }
        document.getElementById("me").innerHTML = user;
        document.getElementById("computer").innerHTML = computer;
    }

    // for userInput == water
    const water = (comp) => {
        if (comp == 3) {
            alert("USER        COMPUTER\nWATER        GUN\n\nUSER WINS")
            user += 1
        } else if (comp == 1) {
            alert("USER        COMPUTER\nWATER        SNAKE\n\nCOMPUTER WINS")
            computer += 1
        } else {
            alert("USER        COMPUTER\nWATER        WATER\n\nDRAW")
        }
        document.getElementById("me").innerHTML = user;
        document.getElementById("computer").innerHTML = computer;
    }


    // for userInput == gun
    const gun = (comp) => {
        if (comp == 1) {
            alert("USER        COMPUTER\nGUN        SNAKE\n\nUSER WINS")
            user += 1
        } else if (comp == 2) {
            alert("USER        COMPUTER\nGUN        WATER\n\nCOMPUTER WINS")
            computer += 1
        } else {
            alert("USER        COMPUTER\nGUN        GUN\n\nDRAW");
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