function init() {
    blank();
    updateView();
}

function blank() {
    board = [
        '', '', '', '', // rad 1
        '', '', '', '', // rad 2
        '', '', '', '', // rad 3
        '', '', '', '', // rad 4
    ];
}

function addL(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[10] = color;
    updateView();
}

function addT(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[6] = color;
    board[9] = color;
    updateView();
}

function addI(color) {
    blank();
    board[1] = color;
    board[5] = color;
    board[9] = color;
    board[13] = color;
    updateView();
}

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


    for (let i = 0; i < 4; i++) {
        if (index >= i * 4 && index < (i + 1) * 4) {
            return i;
        }
    }
}

function getColIndex(index) {

    for (let i = 0; i < 4; i++) {
        if (index === i || index === i + 4 || index === i + 8 || index === i + 12) {
            return i;
        }
    }
}

function getNewRowIndex(colIndex) {
    return 3 - colIndex
}

function getNewColIndex(rowIndex) {
    return rowIndex
}