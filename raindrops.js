export function convert(input) {
    let sounds = "";

    if (input % 3 === 0) {
        sounds += "Pling";
    }

    if (input % 5 === 0) {
        sounds += "Plang";
    }

    if (input % 7 === 0) {
        sounds += "Plong";
    }

    return sounds || String(input);

}

