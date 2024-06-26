

function fetchCharacter( operation ) {
    const buttons = {
        "bracketL": "(",
        "bracketR": ")",
        "clear all": "C",
        "backspace": <>&#8592;</>,
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

function fetchCallback( operation ) {
    
    let callback;
    switch (operation) {
        case "bracketL":
            callback = (num1) => {
                return (num1 <= 100) ? num1 / 100 : 0; 
            }

            break;
        case "bracketR":
            callback = (display) => {
                let x = display.trim();
                x = (x.find(" "))
            }
            break;

        case "clear all":
            callback = () => {
                return 0;
            }
            break;

        case "back space":
            callback = () => {
                
            }
            break;
            
        case "factor":
            callback = () => {
                
            }
            break;
        case "square":
            callback = (display) => {
                let x = Number(display.trim());
                return x * x;
            }
            break;
        case "square root":
            callback = (display) => {
                let x = Number(display.trim());
                return x * x;
            }
            break;

        case "divide":
            callback = (display) => {
                let x = display.slice(0, display.indexOf(" "));
                let y = display.slice(display.lastIndexOf(" "),) 
                return (Number(x) / Number(y));
            }

            break;
        case "*":
            callback = (display) => { 
                let x = display.slice(0, display.indexOf(" "));
                let y = display.slice(display.lastIndexOf(" "),)
                return Number(x) * Number(y);
            }
            break;

        case "-":
            callback = () => {
                
            }
            break;

        case "+":
            callback = () => {
                
            }
            break;
        case "flip":
            callback = () => {
                
            }
            break;

        case ".":
            callback = () => {
                
            }
            break;
        case "=":
            callback = () => {
                
            } 
            break;
    }
    return callback;
}

export {
    fetchCharacter,
    fetchCallback
}