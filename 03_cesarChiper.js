function rot13(str) {
    const originalAlphabet =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chiperAlphabet =
        "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

    const stringReplaced = str.replace(
        /[a-z]/gi,
        (letter) => chiperAlphabet[originalAlphabet.indexOf(letter)]
    );
    return stringReplaced;
}

rot13("SERR PBQR PNZC");
