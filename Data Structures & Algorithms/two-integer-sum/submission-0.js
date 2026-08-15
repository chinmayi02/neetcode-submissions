class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hasMap = new Map();
        for(let i = 0; i <= nums.length - 1; i++){
            const diff = target - nums[i];
            if(hasMap.has(diff)){
                return [hasMap.get(diff), i];
            }
            hasMap.set(nums[i], i);
        }
        return [];
    }
}
