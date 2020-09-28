// counts down from a number n

// using a loop

/*

const countdown = function(n) {

    for (i = n; i > 0; i--) {
        console.log(i)
    }

}

countdown(20)
*/

//count down recursive

const countdown = function(n) {

    if (n === 0) {return};

    console.log(n);
    
    countdown(n - 1);

}

countdown(15);