// Ett element - Animation properties
// Lägg till följande egenskaper till animationsobjektet. Testa med olika värden och behåll det du tycker om bäst. 
// 1. Duration
// 2. delay
// 3. endDelay
// 4. easing
// 5. loop

const divAnimation ={
    targets: 'div',
    backgroundColor: 'hsl(197, 71%, 73%)',
    // borderRadius: '70%',

    translateX: '40px',
    translateY: '20px',

    scale: 0.5,

    rotate: '180deg',
    //här: tiden för elementet att rotera
    duration: 2000,
    //tiden innan elementet börjar rotera
    delay: 1000,

    endDelay: 500,
    easing: 'easeOutElastic',
    loop:true,
   
}

anime(divAnimation);