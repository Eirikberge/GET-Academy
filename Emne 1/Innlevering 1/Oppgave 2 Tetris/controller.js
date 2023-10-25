function rotate() {
    let tmpBoard = [];
    for (let index = 0; index < board.length; index++) {
        let rowIndex = getRowIndex(index);
        let colIndex = getColIndex(index);
        let newRowIndex = getNewRowIndex(colIndex);
        let newColIndex = getNewColIndex(rowIndex);
        let newIndex = newRowIndex * 4 + newColIndex;
        tmpBoard[newIndex] = board[index];
    }
    board = tmpBoard;
    updateView();
}   
function getRowIndex(index) {
    let rowIndex;
    if (index == 0 || index == 1 || index == 2 || index == 3) rowIndex = 0;
    if (index == 4 || index == 5 || index == 6 || index == 7) rowIndex = 1;
    if (index == 8 || index == 9 || index == 10 || index == 11) rowIndex = 2;
    if (index == 12 || index == 13 || index == 14 || index == 15) rowIndex = 3;
    return rowIndex;
}
function getColIndex(index) {
    let colIndex;
    if (index == 0 || index == 4 || index == 8 || index == 12) colIndex = 0;
    if (index == 1 || index == 5 || index == 9 || index == 13) colIndex = 1;
    if (index == 2 || index == 6 || index == 10 || index == 14) colIndex = 2;
    if (index == 3 || index == 7 || index == 11 || index == 15) colIndex = 3;
    return colIndex;
}
function getNewRowIndex(colIndex) {
    let newRowIndex;
    if (colIndex == 0) newRowIndex = 0;
    if (colIndex == 1) newRowIndex = 1;
    if (colIndex == 2) newRowIndex = 2;
    if (colIndex == 3) newRowIndex = 3;
    return newRowIndex;
}

function getNewColIndex(rowIndex) {
    let newColIndex;
    if (rowIndex == 0) newColIndex = 3;
    if (rowIndex == 1) newColIndex = 2;
    if (rowIndex == 2) newColIndex = 1;
    if (rowIndex == 3) newColIndex = 0;
    return newColIndex;

}