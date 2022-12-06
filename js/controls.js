// Controls



// Ett element - Animation properties
// Lägg till följande egenskaper till animationsobjektet. Testa med olika värden och behåll det du tycker om bäst. 
// 1. Duration
// 2. delay
// 3. endDelay
// 4. easing
// 5. loop

const helpAnimation = {
    targets: '#divContainer h1',
    translateY: '-5rem',
    // borderRadius: '70%',


    //tiden mellan varje animation
    // delay: anime.stagger(100),
    delay: anime.stagger(100),

    endDelay: anime.stagger(50),

    //tar tillbaka animationen till ursprungsläget
    direction: 'alternate',
    scale: 0.5,

    rotate: '180deg',
    //här: tiden för elementet att rotera
    duration: 300,
    //tiden innan elementet börjar rotera
    delay: 100,

    endDelay: 500,
    easing: 'easeOutElastic',

    //den ska loppa när vi trycker på play
    loop: true,
    autoplay: false,

}

// anime(divAnimation);

const help = anime(helpAnimation);
help.play();


// Lägg till tre knappar för att kontrollera animationen
// 1.En för play
// 2.En för paus
// 3.En för stop 

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

//play behöver inga argument och det är därför som jag kan lägga in den direkt som en callback-funktion. Den skickas med som en metod.
playBtn.addEventListener('click', help.play);
pauseBtn.addEventListener('click', help.pause);

//funktion anropas när den klick-detektas för stop-knappem
stopBtn.addEventListener('click', function () {
    help.restart();
    help.pause();
});


