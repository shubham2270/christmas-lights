//  const lights = document.querySelectorAll('.lights');
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

 let intervalId;
 let toggle = false;

 //Controls the speed of light by adding or subtracting +/-50ms on clicking btn
 let lightSpeed = 100; //min 50 max 500
 //Adds the value of lightSpeed to every next variable then used in time interval
 const a = lightSpeed;
 const b = a + lightSpeed;
 const c = a + b;
 const d = a + c;
 const e = a + d;
 const f = a + e;
 const g = a + f;

 console.log(g)

 const incrementDuration = () => {
    lightSpeed += 50
    console.log(lightSpeed)
 }
 const decreaseDuration = () => {
    lightSpeed -= 50
    console.log(lightSpeed)
    console.log('g', g)
 }

// removes high intensity class and add it back on specified time duration
 const lightUpRed = () => {
    red.classList.remove('red-h')
    setTimeout(() => {
        red.classList.add('red-h')
    }, a); 
    console.log(a)                 
 }

 const lightUpOrange = () => {
    orange.classList.remove('orange-h')
    setTimeout(() => {
        orange.classList.add('orange-h')
    }, b); 
 }

 const lightUpYellow = () => {
    yellow.classList.remove('yellow-h')
    setTimeout(() => {
        yellow.classList.add('yellow-h')
    }, c);
 }

 const lightUpGreen = () => {
    green.classList.remove('green-h')
    setTimeout(() => {
        green.classList.add('green-h')
    }, d); 
 }

 const lightUpBlue = () => {
    blue.classList.remove('blue-h')
    setTimeout(() => {
        blue.classList.add('blue-h')
    }, e);
 }

 const lightUpIndigo = () => {
    indigo.classList.remove('indigo-h')
    setTimeout(() => {
        indigo.classList.add('indigo-h')
    }, f);
 }

 const lightUpPurple = () => {
    purple.classList.remove('purple-h')
    setTimeout(() => {
        purple.classList.add('purple-h')
    }, g);
 }

//Sets the overall time of each round the light glows
const flash = () => {
    intervalId = setInterval(allLightUp, lightSpeed + g);
}

//Stops the interval on clicking stop button
const stopFlash = () => {
    clearInterval(intervalId)
}


//Calls all the light colors on clicking start
 const allLightUp = () => {
     lightUpRed();
     lightUpOrange();
     lightUpYellow();
     lightUpGreen();
     lightUpBlue();
     lightUpIndigo();
     lightUpPurple();
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
     },2000)
 }

 //Handles what happen when start or stop is clicked
 const lightManager = () => {
     if (toggle) {
         stopFlash()
         toggle = !toggle;
         button.innerHTML = 'START';
         button.style.background = '#fff'
         offLightsOnStop();
     } else {
         flash()
         toggle = !toggle;
         button.innerHTML = 'STOP'
         button.style.background = '#ffdcdc'
         msg.style.opacity = '1';
         messageHide();
     }
 }



 button.addEventListener('click', lightManager);
 inc.addEventListener('click', incrementDuration);
 dec.addEventListener('click', decreaseDuration);