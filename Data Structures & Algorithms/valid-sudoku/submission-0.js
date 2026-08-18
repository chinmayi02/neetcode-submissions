class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: board.length}, ()=> new Set());
        const cols = Array.from({length: board.length}, ()=> new Set());
        const box = Array.from({length: board.length}, ()=> new Set());
        for(let r = 0; r<board.length; r++){
            for(let c = 0; c < board.length; c++){
                const value = board[r][c];
                if(value == ".") continue;
                const boxids = Math.floor(r/3)*3 + Math.floor(c/3);
                if(rows[r].has(value) || cols[c].has(value) || box[boxids].has(value)){
                    return false;
                }
                rows[r].add(value);
                cols[c].add(value);
                box[boxids].add(value);
            }
        }
        return true;
    }
}
