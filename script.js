const btn = document.querySelector("button");
let interval;
let seconde = 10;

// Fonctions 
 
const decompte = () => {
    seconde--;
    if (seconde == 0) {
        stop();
    }else {
        document.body.innerHTML += seconde + "<br/>";
    }
};

const start = () => {
   interval = setInterval(decompte, 1000);
};

const stop = () => {
    clearInterval(interval);
    document.body.innerHTML += "Stop !";
};


// Evenements

btn.addEventListener('click', start);