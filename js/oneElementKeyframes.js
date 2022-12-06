// Ett element - Keyframes
// Skapa en animation som gör följande
// 1.Ett element som rör sig i en fyrkant
// 2.Ett element som rör sig i en trekant
// 3.Ett valfritt html-element som rör sig i ett kors i följande ordning. Varje bokstav är en punkt på sidan med en x och y koordinat. 
// a.b-c
// b.c-a
// c.a-c
// d.c-d
// e.d-c
// f.c-e
// g.e-c
// h.c-b


// 	    a	

// b	c	d

// 	    e	


const animationInfo = {
    targets: 'div',


    keyframes: [
        // a.b-c
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // b.c-a
        { translateY: '-200px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // c.a-c
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // d.c-d
        { translateY: '0px', translateX: '400px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // e.d-c
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // f.c-e
        { translateY: '200px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // g.e-c
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(0, 50%, 70%)' },

        // h.c-b
        { translateY: '0px', translateX: '0px', backgroundColor: 'hsl(0, 50%, 70%)' },  
    ],

    delay: 500,
    duration: 3000,
    loop: true,
}

anime(animationInfo);