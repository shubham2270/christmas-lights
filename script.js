//const lights = document.querySelectorAll('.lights');
const red = document.getElementsByClassName('red')[0];
const orange = document.getElementsByClassName('orange')[0];
const yellow = document.getElementsByClassName('yellow')[0];
const green = document.getElementsByClassName('green')[0];
const blue = document.getElementsByClassName('blue')[0];
const indigo = document.getElementsByClassName('indigo')[0];
const purple = document.getElementsByClassName('purple')[0];

const button = document.getElementById('toggle');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const msg = document.getElementById('message');
const reset = document.getElementById('reset');

let intervalId;
let toggle = false;

//Controls the speed of light by adding or subtracting +/-50ms on clicking btn
let lightSpeed = 250; //min 50 max 500
//Adds the value of lightSpeed to every next variable then used in time interval
let a = lightSpeed;
let b = a + lightSpeed;
let c = a + b;
let d = a + c;
let e = a + d;
let f = a + e;
let g = a + f;

//Click the negative sign button to IncreaseDuration or Decrease speed
const incrementDuration = () => {

    if(lightSpeed === 400) {
        inc.setAttribute('disabled', 'true')
    }
    msg.style.opacity = '1';
    messageHide();
    msg.innerHTML = `Duration: ${lightSpeed}ms`
    dec.removeAttribute('disabled')

    lightSpeed += 50

     a = lightSpeed;
     b = a + lightSpeed;
     c = a + b;
     d = a + c;
     e = a + d;
     f = a + e;
     g = a + f;

     stopFlash()
     flash(g);

}

//Click the Positive sign button to decreaseDuration or Increase speed
const decreaseDuration = () => {

    if(lightSpeed === 100) {
        dec.setAttribute('disabled', 'true')
    }
    msg.style.opacity = '1';
    messageHide();
    msg.innerHTML = `Duration: ${lightSpeed}ms`
    inc.removeAttribute('disabled')

    lightSpeed -= 50
     a = lightSpeed;
     b = a + lightSpeed;
     c = a + b;
     d = a + c;
     e = a + d;
     f = a + e;
     g = a + f;

    stopFlash()
    flash(g);
}


// removes high intensity class and add it back on specified time duration
const lightUpRed = (a) => {
    red.classList.remove('red-h')
    setTimeout(() => {
        red.classList.add('red-h')
    }, a);
}

const lightUpOrange = (b) => {
    orange.classList.remove('orange-h')
    setTimeout(() => {
        orange.classList.add('orange-h')
    }, b);
}

const lightUpYellow = (c) => {
    yellow.classList.remove('yellow-h')
    setTimeout(() => {
        yellow.classList.add('yellow-h')
    }, c);
}

const lightUpGreen = (d) => {
    green.classList.remove('green-h')
    setTimeout(() => {
        green.classList.add('green-h')
    }, d);
}

const lightUpBlue = (e) => {
    blue.classList.remove('blue-h')
    setTimeout(() => {
        blue.classList.add('blue-h')
    }, e);
}

const lightUpIndigo = (f) => {
    indigo.classList.remove('indigo-h')
    setTimeout(() => {
        indigo.classList.add('indigo-h')
    }, f);
}

const lightUpPurple = (g) => {
    purple.classList.remove('purple-h')
    setTimeout(() => {
        purple.classList.add('purple-h')
    }, g);
}

//Sets the overall time of each round the light glows
const flash = (g) => {
    intervalId = setInterval(allLightUp, lightSpeed + g);
}

//Stops the interval on clicking stop button
const stopFlash = () => {
    clearInterval(intervalId)
}


//Calls all the light colors on clicking start
const allLightUp = () => {
    lightUpRed(a);
    lightUpOrange(b);
    lightUpYellow(c);
    lightUpGreen(d);
    lightUpBlue(e);
    lightUpIndigo(f);
    lightUpPurple(g);
}

const offLightsOnStop = () => {
    red.classList.remove('red-h');
    orange.classList.remove('orange-h');
    yellow.classList.remove('yellow-h');
    green.classList.remove('green-h');
    blue.classList.remove('blue-h');
    indigo.classList.remove('indigo-h');
    purple.classList.remove('purple-h');
}


//Display's powering up message
const messageHide = () => {
    setTimeout(() => {
        msg.style.opacity = '0';
    }, 2000)
}

//Handles what happen when start or stop is clicked
const lightManager = () => {
    if (toggle) { //On clicking stop this rule works
        stopFlash()
        toggle = !toggle;
        button.innerHTML = 'START';
        button.style.background = '#fff'
        offLightsOnStop();
        dec.setAttribute('disabled', 'true');
        inc.setAttribute('disabled', 'true');
     
    } else {    //On clicking start this rule works
        flash(g)
        toggle = !toggle;
        button.innerHTML = 'STOP'
        button.style.background = '#ffdcdc'
        msg.style.opacity = '1';
        messageHide();
        dec.removeAttribute('disabled')
        inc.removeAttribute('disabled')
        
    }
}

//Reloads the browser
reset.addEventListener('click', () => {
    location.reload();
})


button.addEventListener('click', lightManager);
inc.addEventListener('click', incrementDuration);
dec.addEventListener('click', decreaseDuration);