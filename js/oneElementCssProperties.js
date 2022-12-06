// Ett element - CSS properties


// Skapa en animation på ett valfritt element som ändrar på följande
// 1. Background-color
// 2. translateX
// 3. translateY
// 4. scale
// 5. rotate

const divAnimation ={
    targets: 'div',
    backgroundColor: 'hsl(197, 71%, 73%)',
    // borderRadius: '70%',

    translateX: '40px',
    translateY: '20px',

    scale: 0.5,

    rotate: '180deg',
   
}

anime(divAnimation);