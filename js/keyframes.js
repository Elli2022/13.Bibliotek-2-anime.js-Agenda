const animationInfo = {

    targets: 'div',

    //flyttar sig 3 gånger
    keyframes: [
        {translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0, 50%, 80%)'},
        //med detta kommer vårt element hamna utanför med 100vw:
        // {translateY: '100px', translateX: '100vw'},
        {translateY: '0px', translateX: '200px', backgroundColor: 'hsl(0, 30%, 30%)' },
        {translateY: '200px', translateX: '50px'},
        //om vi vill att den ska gå tillbaka till startpositionen så får vi ange detta:
        {translateY: '0px', translateX: '0px'},
    ],

    delay:1000,
    duration: 4000,
    loop: true,

    
}

anime(animationInfo);