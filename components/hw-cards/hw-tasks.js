// Задача 1.3
export function sumOfSquares(arr) {
    return arr.reduce((sum, x) => sum + x * x, 0);
}

// Задача 1.7
export function isEqualObj(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return a === b;
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => isEqualObj(a[key], b[key]));
}

// Задача 2.10
export function countPrefixes(words, str) {
    return words.filter(word => str.startsWith(word)).length;
}

// Палиндром — решение 1: через reverse
export function isPalindrom1(input) {
    const s = String(input)
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/gi, "");
    return s === s.split("").reverse().join("");
}

// Палиндром — решение 2: два указателя
export function isPalindrom2(input) {
    const s = String(input)
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/gi, "");
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
