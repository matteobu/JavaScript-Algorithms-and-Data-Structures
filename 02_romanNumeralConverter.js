function convertToRoman(num) {
    let romanUnit = {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
    };
    let romanDecimal = {
        0: "",
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC",
    };
    let romanHundred = {
        0: "",
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM",
    };
    let romanThousand = {
        0: "",
        1: "M",
        2: "MM",
        3: "MMM",
    };
    let romanNumber = [];

    if (num <= 10) {
        let notMoreANumber = num.toString().split("");
        let unit = romanUnit[notMoreANumber[0]];
        return unit;
    } else if (num > 10 && num <= 100) {
        let notMoreANumber = num.toString().split("");
        let unit = romanUnit[notMoreANumber[1]];
        let decimal = romanDecimal[notMoreANumber[0]];
        return decimal + unit;
    } else if (num > 100 && num <= 999) {
        let notMoreANumber = num.toString().split("");
        let unit = romanUnit[notMoreANumber[2]];
        let decimal = romanDecimal[notMoreANumber[1]];
        let hundred = romanHundred[notMoreANumber[0]];
        return hundred + decimal + unit;
    } else num >= 1000;
    let notMoreANumber = num.toString().split("");
    let unit = romanUnit[notMoreANumber[3]];
    let decimal = romanDecimal[notMoreANumber[2]];
    let hundred = romanHundred[notMoreANumber[1]];
    let thousand = romanThousand[notMoreANumber[0]];
    return thousand + hundred + decimal + unit;
}
convertToRoman(36);
