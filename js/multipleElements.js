 const helpAnimation = {
    targets:'#container div',
    translateY: '-5rem',

    //tiden mellan varje animation
    delay: anime.stagger(100),
    // delay: anime.stagger(1000),

    // endDelay: anime.stagger(50),

    //tar tillbaka animationen till ursprungsläget
    direction: 'alternate',

    easing: 'easeOutSine',
    duration: 300,
   
   //den ska loppa när vi trycker på play
    loop: true,
    autoplay: false,
 }

//  anime(helpAnimation);

const help = anime(helpAnimation);

//som ett argument
// help.play();

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

//play behöver inga argument och det är därför som jag kan lägga in den direkt som en callback-funktion. Den skickas med som en metod.
playBtn.addEventListener('click', help.play);
pauseBtn.addEventListener('click', help.pause);

//funktion anropas när den klick-detektas för stop-knappem
stopBtn.addEventListener('click', function(){
    help.restart();
    help.pause();
});