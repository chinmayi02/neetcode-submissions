class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sequence = new Set(nums);
        let streak = 0;
        for(let num of nums){
            if(sequence.has(num-1)) continue;
            let currentStreak = 1;
            while(sequence.has(num+1)){
                currentStreak++;
                num++;
            }
            streak = Math.max(currentStreak, streak);
        }
        return streak;
    }
}
