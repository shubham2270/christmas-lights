//const lights = document.querySelectorAll('.lights');
const red = document.getElementsByClassName('red');
const orange = document.getElementsByClassName('orange');
const yellow = document.getElementsByClassName('yellow');
const green = document.getElementsByClassName('green');
const blue = document.getElementsByClassName('blue');
const indigo = document.getElementsByClassName('indigo');
const purple = document.getElementsByClassName('purple');


const button = document.getElementById('toggle');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const msg = document.getElementById('message');
const reset = document.getElementById('reset');
const addLight = document.getElementById('addLight');
const removeLight = document.getElementById('removeLight');
const mainLightWrapper = document.getElementsByClassName('main_lights_wrapper')[0];

let lightRowCount = 1;
//Checks if add/remove button should be disabled based on lightRowCount value
const addAndRemoveButtonHandler = () => {
    if(lightRowCount === 7) {
        addLight.setAttribute('disabled', 'true');
    } else if(lightRowCount < 7) {
        addLight.removeAttribute('disabled');
    }

    if(lightRowCount === 1) {
        removeLight.setAttribute('disabled', 'true');
    } else if (lightRowCount > 1) {
        removeLight.removeAttribute('disabled');
    }
}

//Add one row of light on clicking addLight button
const addRow = () => {
    const lightWrapper = document.createElement('div');
    lightWrapper.className = 'lights_wrapper';
    lightWrapper.innerHTML = `
    <div class="lights red"></div>
    <div class="lights orange"></div>
    <div class="lights yellow"></div>
    <div class="lights green"></div>
    <div class="lights blue"></div>
    <div class="lights indigo"></div>
    <div class="lights purple"></div>`
    mainLightWrapper.appendChild(lightWrapper)

    lightRowCount += 1
    console.log(lightRowCount);
    addAndRemoveButtonHandler()
}

//Removes one row of light on clicking removeLight button 
const removeRow = () => {
   const child = mainLightWrapper.getElementsByClassName('lights_wrapper')[0];
   mainLightWrapper.removeChild(child)
   lightRowCount -= 1
   addAndRemoveButtonHandler()
}




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

let intervalId;

//Sets the overall time of each round the light glows
const flash = (g) => {
    intervalId = setInterval(allLightUp, lightSpeed + g);
}


//Stops the interval on clicking stop button
const stopFlash = () => {
    clearInterval(intervalId)
}


let intervals = []
const allLightUp = () => {
 // removes high intensity class and add it back on specified time duration
   Object.entries(red).forEach(el => {
        el[1].classList.remove('red-h')
       let i = setTimeout(() => {
            el[1].classList.add('red-h')
        }, a);
        intervals.push(i)
    })

    Object.entries(orange).forEach(el => {
        el[1].classList.remove('orange-h')
        let i = setTimeout(() => {
            el[1].classList.add('orange-h')
        }, b);
        intervals.push(i)
    })

    Object.entries(yellow).forEach(el => {
        el[1].classList.remove('yellow-h')
        let i = setTimeout(() => {
            el[1].classList.add('yellow-h')
        }, c);
        intervals.push(i)
    })

    Object.entries(green).forEach(el => {
        el[1].classList.remove('green-h')
        let i = setTimeout(() => {
            el[1].classList.add('green-h')
        }, d);
        intervals.push(i)
    })

    Object.entries(blue).forEach(el => {
        el[1].classList.remove('blue-h')
      let i = setTimeout(() => {
            el[1].classList.add('blue-h')
        }, e);
        intervals.push(i)
    })

    Object.entries(indigo).forEach(el => {
        el[1].classList.remove('indigo-h')
        let i =  setTimeout(() => {
            el[1].classList.add('indigo-h')
        }, f);
        intervals.push(i)
    })

    Object.entries(purple).forEach(el => {
        el[1].classList.remove('purple-h')
        let i = setTimeout(() => {
            el[1].classList.add('purple-h')
        }, g);
        intervals.push(i)
    })
    console.log(intervals.length) 
    // if(intervals.length === 28) {
    //     intervals = [];
    // }
}


const offLightsOnStop = () => {
    //clears the intervals for each light
    intervals.forEach(el => clearInterval(el));
    intervals = []; //empty the array
   
    //Removes the already added class
    Object.entries(red).forEach(el => {
        el[1].classList.remove('red-h')
    })

    Object.entries(orange).forEach(el => {
        el[1].classList.remove('orange-h')
    })

    Object.entries(yellow).forEach(el => {
        el[1].classList.remove('yellow-h')
    })

    Object.entries(green).forEach(el => {
        el[1].classList.remove('green-h')
    })

    Object.entries(blue).forEach(el => {
        el[1].classList.remove('blue-h')
    })

    Object.entries(indigo).forEach(el => {
        el[1].classList.remove('indigo-h')
    })

    Object.entries(purple).forEach(el => {
        el[1].classList.remove('purple-h')
    })
}


//Display's powering up message
const messageHide = () => {
    setTimeout(() => {
        msg.style.opacity = '0';
    }, 2000)
}

let toggle = false;
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
addLight.addEventListener('click', addRow);
removeLight.addEventListener('click', removeRow);
