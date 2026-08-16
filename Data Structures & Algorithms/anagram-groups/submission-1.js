class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length == 0){
            return [[""]];
        } else if(strs.length == 1){
            return [strs[0]];
        } else {
            const hashTable = new Map();
            for(const s of strs){
                const sortedWord = s.split('').sort().join('');
                if(!hashTable.has(sortedWord)){
                    hashTable.set(sortedWord, []);
                } 
                hashTable.get(sortedWord).push(s)
            }
            return Array.from(hashTable.values());
        }
    }
}
