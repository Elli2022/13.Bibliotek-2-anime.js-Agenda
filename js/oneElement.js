const divAnimation = {
    targets: 'div',
    backgroundColor: 'hsl(197, 71%, 73%)',
    borderRadius: '50%',
    
    //med scale så kan vi antingen förstora ex. 2 eller förminska ex. 0.5
    scale: 2,

    //kom ihåg att man alltid utgår från översta vänstra hörnet:

    //flyttar objekt längsmed x-axeln
    translateX: '20vw',

    //flyttar objekt längsmed y-axeln. Därför kommer objektet flyttas UPPÅT om vi ex. sätter -25px.
    translateY: '45px',

    //gör så att objektet roterar. Anges i degrees
    rotate:'360deg',
  
    duration: 2000,
    
    //ta bort delay om du ska göra den klickbar med en eventListener
    // delay: 1000,

    endDelay: 500,

    //Easing:
    // easing: 'linear',
    // easing: 'easeInQuad',
    // easing: 'easeOutInBounce',
    easing: 'easeOutBounce',

    
    // direction: 'reverse',
    direction: 'alternate',
    
    //kommer hålla på i en loop i all evighet
    // loop: true,

    // om vi ska göra den klickbar
    loop: 1,
    
}


// anime(divAnimation);


//när vi klickar så ska animationen starta:

const div = document.querySelector('div');
div.addEventListener('click', function(){
    anime(divAnimation);
})
