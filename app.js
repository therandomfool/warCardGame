//public variables

let aUsersturns = [];
let aDealerturns = [];

let userscore = 26;
let dealerscore = 26;


//loto
function lotocards() {

    var usercard = Math.floor(Math.random() * 13 + 2);
    aUsersturns.push(usercard);

    var usercardoutput = "";
    if(usercard === 11) {
        usercardoutput = "J"
    } else if(usercard === 12) {
        usercardoutput = "Q";
    } else if(usercard === 13) {
        usercardoutput = "K";
    } else if(usercard === 14) {
        usercardoutput = "A";
    } else {
        usercardoutput = usercard;
    }

    document.getElementById("usercardnum").innerHTML = usercardoutput;

    var dealercard = Math.floor(Math.random() * 13 + 2);
    aDealerturns.push(dealercard);

    var dealercardoutput = "";
    if(dealercard === 11) {
        dealercardoutput = "J"
    } else if(dealercard === 12) {
        dealercardoutput = "Q";
    } else if(dealercard === 13) {
        dealercardoutput = "K";
    } else if(dealercard ===14) {
        dealercardoutput = "A";
    } else {
        dealercardoutput = dealercard;
    }

    document.getElementById("dealercardnum").innerHTML = dealercardoutput;

    // dealer chars:
    var dealerchar = Math.floor(Math.random() * 4 + 1);

    switch(dealerchar) {
        case 1:
            dealerchar = "&hearts;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;

        case 2:
            dealerchar = "&spades;";
            document.getElementById("dealerchar").style.color = "black";
            document.getElementById("dealerbigchar").style.color = "black";
        break;

        case 3:
            dealerchar = "&diams;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;
        
        case 4:
            dealerchar = "&clubs;";
            document.getElementById("dealerchar").style.color = "black";
            document.getElementById("dealerbigchar").style.color = "black";
        break;
    }
    document.getElementById("dealerchar").innerHTML = dealerchar;
    document.getElementById("dealerbigchar").innerHTML = dealerchar;

    // user chars:
    var userchar = Math.floor(Math.random() * 4 + 1);

    switch(userchar) {
        case 1:
            userchar = "&hearts;";
            document.getElementById("userchar").style.color = "red";
            document.getElementById("userbigchar").style.color = "red";
        break;

        case 2:
            userchar = "&spades;";
            document.getElementById("userchar").style.color = "black";
            document.getElementById("userbigchar").style.color = "black";
        break;

        case 3:
            userchar = "&diams;";
            document.getElementById("userchar").style.color = "red";
            document.getElementById("userbigchar").style.color = "red";
        break;
        
        case 4:
            userchar = "&clubs;";
            document.getElementById("userchar").style.color = "black";
            document.getElementById("userbigchar").style.color = "black";
        break;
    }
    document.getElementById("userchar").innerHTML = userchar;
    document.getElementById("userbigchar").innerHTML = userchar;

    // scores:
    if(usercard === dealercard) {
        ifqual();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore++;
        dealerscore--;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealercard > usercard) {
        dealerscore++;
        userscore--;
        document.getElementById("pointer").innerHTML = "◄";
    }

    if(userscore < 10) {
        document.getElementById("userscore").style.color = "red";
    } else {
        document.getElementById("userscore").style.color = "black";
    }

    if(dealerscore < 10) {
        document.getElementById("dealerscore").style.color = "red";
    } else {
        document.getElementById("dealerscore").style.color = "black";
    }

    // Display Scores:
    document.getElementById("dealerscore").innerHTML = dealerscore;
    document.getElementById("userscore").innerHTML = userscore;        

    // Display Turns:
    var dealerturns = "";
    var i;
    for(i = 0; i < aDealerturns.length; i++) {
        dealerturns = dealerturns + aDealerturns[i] + ", ";
        document.getElementById("dealerturns").innerHTML = dealerturns
    }

    var userturns = "";
    var j;
    for(j = 0; j < aUsersturns.length; j++) {
        userturns = userturns + aUsersturns[j] + ", ";
        document.getElementById("userturns").innerHTML = userturns
    }

    chekingscores();
}

function ifqual() {
    var usercard = Math.floor(Math.random() * 13 + 2);
    aUsersturns.push(usercard);

    var dealercard = Math.floor(Math.random() * 13 + 2);
    aDealerturns.push(dealercard);

    if(usercard === dealercard) {
        ifqual();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore = userscore +4;
        dealerscore = dealerscore -4;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealerscore > userscore) {    
        dealerscore = dealerscore +4;
        userscore = userscore -4;
        document.getElementById("pointer").innerHTML = "◄";
    }
}

function chekingscores() {
    if(userscore <= 0) {
        userscore = 0;
        alert("Dealer Win!");
        document.getElementById("mainbtn").disabled = true;
    } else if(dealerscore <= 0) {
        userscore = 0;
        alert("User Win!");
        document.getElementById("mainbtn").disabled = true;
    }
}