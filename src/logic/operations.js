

function fetchCharacter( operation ) {
    const buttons = {
        "percent": "%",
        "clear entry": "CE",
        "clear all": "C",
        "clear digit": <>&#8592;</>,
        "factor": <><sup>1</sup>/<sub>x</sub></>,
        "square": <>x<sup>2</sup></>,
        "square root": <>&#8730;</>,
        "divide": <>&#247;</>,
        "7": 7,
        "8": 8,
        "9": 9,
        "*": <>&times;</>,
        "4": 4,
        "5": 5,
        "6": 6,
        "-": <>&#8722;</>,
        "1": 1,
        "2": 2, 
        "3": 3,
        "+": <>&#43;</>,
        "flip": <>&#8314;/&#8331;</>,
        "0": 0,
        ".": ".",
        "=": "="
    }
    

    return buttons[operation];
}

// function fetchCallback( operation ) {
    
//     let callback;
//     switch (operation) {
//         case "percent":
//             callback = (num1) => {
//                 return (num1 <= 100) ? num1 / 100 : 0; 
//             }

//             break;
//         case "clear entry":
//             callback = () => {
                
//             }

//             break;
//         case "clear all":
//             callback = 
//             break;
//         case "clear digit":
//             callback = 
//             break;
//         case "factor":
//             callback = 
//             break;
//         case "square":
//             callback = 
//             break;
//         case "square root":
//             callback = 
//             break;
//         case "divide":
//             callback = 
//             break;
//         case "7":
//             callback = 
//             break;
//         case "8":
//             callback = 
//             break;
//         case "9":
//             callback = 
//             break;
//         case "*":
//             callback = 
//             break;
//         case "4":
//             callback = 
//             break;
//         case "5":
//             callback = 
//             break;
//         case "6":
//             callback = 
//             break;
//         case "-":
//             callback = 
//             break;
//         case "1":
//             callback = 
//             break;
//         case "2" :
//             callback = 
//             break;
//         case "3":
//             callback = 
//             break;
//         case "+":
//             callback = 
//             break;
//         case "flip":
//             callback = 
//             break;
//         case "0":
//             callback = 
//             break;
//         case ".":
//             callback = 
//             break;
//         case "=":
//             callback = 
//             break;
//     }
// }

export {
    fetchCharacter
}