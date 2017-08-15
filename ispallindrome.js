function isPallindrome(str) {
    return str === str.split('').reverse().join('');
}

isPallindrome("Ayan");
