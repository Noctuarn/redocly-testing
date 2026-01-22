function sumSequence(n) {
let sum = 0;

  if(n == 0){
    sum = 0.0;
    return sum;
  } else {

      for (let i = 1; i <= n; i++) {
        sum += (1 / (2**i));
    }
  }

  return sum.toFixed(2) + '';
}

function mergeArrays(...arr) {
    let res = [];

    if(arr.length == 0) {
        return res;
    } else{
        for (let i = 0; i < arr.length; i++) {
            res.push(...arr[i]);
        }
        return res;
    }
}

function isPalindrome(str) {
    let reversStr = str.split('').reverse().join('');

    if(str === reversStr) {
        return true;
    } else {
        return false;
    }
}

function countLetters(str) {

    let obj = {},
        letters = str.replace(/\s+/g, "").split('');

    if (str = "") {
        return obj;
    } else{
        for (let i = 0; i < letters.length; i++) {
            if (!obj[letters[i]]) {
                obj[letters[i]] = 1;
            } else {
                obj[letters[i]] += 1;
            }
        }
        return obj;
    }
}

function divideArrays(arr, size) {
    let res = [];

    if(size > 0){
        for (let i = 0; i < arr.length; i += size) {
            res.push(arr.slice(i, i + size));
        }
    } else if(size == arr.length){
        return arr;
    }

    return res;
}

function encrypt(str, n) {
    if(n <= 0) {
        return str;
    } else {

        let res = [];
        str = str.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i),
                newCode = 0;

                if (charCode - n < 97) {
                    let diff = charCode - 97;
                    newCode = 122 - diff + 2;
                } else {
                    newCode = charCode - n;
                }
            res[i] = (String.fromCharCode(newCode));
        }
        return res.join('').toUpperCase();
    }
}
