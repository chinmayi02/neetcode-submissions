class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const bucket = [];
        const result = [];
        for(let i = 0; i< nums.length; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }
        for(let [num, freq] of Object.entries(map)){
            if(!bucket[freq]){
                bucket[freq] = [num];
            } else {
                bucket[freq].push(num);
            }
        }
        for(let i = bucket.length - 1; i >= 0; i--){
            if(bucket[i]){ result.push(...bucket[i]);
            if(result.length >= k) break;}
        }
    return result;
    }
}
