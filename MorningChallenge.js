function hasUniqueChars (words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j ++) {
            if (words[i] === words[j]) {
                return false
            }
        }
    }
return true
}
console.log(hasUniqueChars('Alec'))