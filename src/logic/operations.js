

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
            callback = () => {
                
            }

            break;
        case "bracketR":
            callback = () => {
            
            }
            break;

        case "clear all":
            callback = () => {
                return 0;
            }
            break;

        case "backspace":
            callback = (display) => {
                let temp = display.trim();
                let index = (temp.lastIndexOf(" "));

                let x = (index >= 0) ? display.slice(0,index) : 
                (temp.length > 1) ? temp.slice(0, temp.length - 1) : 0;
                return x;
            }
            break;

        case "factor":
            callback = ( display ) => {

                let conversion = Number(display);
                return (isNaN(Number(conversion))) ? display : 1 / conversion; 
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
                let x = display.slice(0, display.indexOf(" "));
                let y = display.slice(display.lastIndexOf(" "),)
                return Number(x) - Number(y);
            }
            break;

        case "+":
            callback = () => {
                let x = display.slice(0, display.indexOf(" "));
                let y = display.slice(display.lastIndexOf(" "),)
                return Number(x) + Number(y);
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