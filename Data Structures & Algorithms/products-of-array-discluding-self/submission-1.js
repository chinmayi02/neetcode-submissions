class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let startPlaceHolder = 1;
        let forwardArray = [];
        for(let i = 0; i < nums.length; i++){
            forwardArray.push(startPlaceHolder);
            startPlaceHolder = startPlaceHolder * nums[i];
        }
        let res = [];
        let secStartPlaceHolder = 1;
        for(let i = nums.length - 1; i>=0; i--){
            res.unshift(secStartPlaceHolder * forwardArray[i]);
            secStartPlaceHolder = secStartPlaceHolder * nums[i];
        }
        return res;
    }
    
}
