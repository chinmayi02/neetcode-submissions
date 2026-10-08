class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for(let i = 0; i< strs.length; i++){
            const delimitor = strs[i].split('').length;
                const encodedStr = delimitor + "#" + strs[i];
                encodedString += encodedStr;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let result = [];
       let i = 0;
       while(i<str.length){
        let j = i;
        while(str[j] !== '#'){
            j++;
        }
        const length = Number(str.slice(i,j));
        j++;
        const word = str.slice(j, j+length);
        result.push(word);
        i = j + length;
       }
     return result;  
    }
}
