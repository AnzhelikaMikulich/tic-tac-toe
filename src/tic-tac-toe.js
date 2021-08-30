class TicTacToe {
  currentPlayer = "x";
  gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  constructor() {}

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex]) {
      return;
    } else {
      this.gameField[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
    }
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  getWinner() {
    if (
      this.gameField[0][0] != null &&
      this.gameField[0][0] === this.gameField[1][1] &&
      this.gameField[1][1] === this.gameField[2][2]
    ) {
      return this.gameField[0][0];
    } else if (
      this.gameField[0][2] != null &&
      this.gameField[0][2] === this.gameField[1][1] &&
      this.gameField[1][1] === this.gameField[2][0]
    ) {
      return this.gameField[0][2];
    } else {
      for (let i = 0; i < this.gameField.length; i++) {
        if (
          this.gameField[i][0] === this.gameField[i][1] &&
          this.gameField[i][1] === this.gameField[i][2] &&
          this.gameField[i][0] != null
        )
          return this.gameField[i][0];
        for (let j = 0; j < this.gameField[0].length; j++) {
          if (
            this.gameField[0][j] === this.gameField[1][j] &&
            this.gameField[1][j] === this.gameField[2][j] &&
            this.gameField[0][j] != null
          ) {
            return this.gameField[0][j];
          }
        }
      }
    }
    return null;
  }

  noMoreTurns() {
    return this.gameField.every((row) => row.every((column) => column));
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    if (
      rowIndex > this.gameField[rowIndex].length - 1 ||
      colIndex > this.gameField.length - 1
    ) {
      return null;
    }
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
