import React from 'react'
import './style.scss'
import Puzzle from './Puzzle'

class Board extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      board: Puzzle.getBoard(),
      player: 1
    }
	}
	
  componentDidMount() {}

  checkWinner = (row, col) => {

    var _this = this;

    function checkDirection(direction) {
      let total = 0;
      let i = row + direction.i;
      let j = col + direction.j;
      while (
        i >= 0 &&
        i < 6 &&
        j >= 0 &&
        j < 7 &&
        _this.state.board[i][j] === _this.state.player
      ) {
        total++;
        i += direction.i;
        j += direction.j;
      }
      return total;
    }

    function checkWin(dirA, dirB) {
      const total = 1 + checkDirection(dirA) + checkDirection(dirB);
      if (total >= 4) {
        console.log(`${_this.state.player} wins!`)
        return _this.state.player;
      } else {
        return null;
      }
    }

    function checkVerticals() {
      return checkWin({i: -1, j: 0}, {i: 1, j:0});
    }

    function checkHorizontals() {
      return checkWin({i: 0, j: -1}, {i: 0, j: 1});
    }

    function checkBRtoTL() {
      return checkWin({i: 1, j: -1}, {i: 1, j: 1});
    }

    function checkBLtoTR() {
      return checkWin({i: 1, j: 1}, {i: -1, j: -1});
    }

    return checkVerticals() || checkHorizontals() || checkBRtoTL() || checkBLtoTR();
  }

  getNextCell = (id) => {
    var col = id[1];
    var { board } = this.state;
    for (var i = 5; i >= 0; i--) {
      if(board[i][col] === 0) {
        return `${i}${col}`;
      }
    }
    return false;
  }

  makeMove = (event) => {
    var id = event.target.id;
    var cell = this.getNextCell(id);
    const { board, player } = this.state;
    var _board = board;
    var _player = player;
    if(cell) {
      var row = parseInt(cell[0]);
      var col = parseInt(cell[1]);
      _board[row][col] = _player;
      if (_player === 1) {
        _player = 2;
      } else {
        _player = 1;
      }
      this.checkWinner(row, col);
      this.setState(() => {
        return {
          board: _board,
          player: _player
        }
      });
      console.table(this.state.board);
    } else {
      console.log("Full, can't make any more moves!");
    }
  }

  highlightCell = (event) => {
    var id = event.target.id;
    var cell = this.getNextCell(id);
    if(cell) {
      // console.log(cell);
    } else {
      // console.log("Full, can't make any more moves!");
    }
  }
  
  renderCells = () => {
    var _this = this;
    var cells = [];
    for(var i = 0; i < 6; i++) {
      for(var j = 0; j < 7; j++) {
        var id = `${i}${j}`;
        cells.push(<div key={id} id={id} className={`cell ${_this.state.board[i][j] === 1 ? 'red' : ''} ${_this.state.board[i][j] === 2 ? 'black' : ''}`} onClick={(event) => this.makeMove(event)} onMouseOver={(event) => this.highlightCell(event)}></div>);
      }
    }
    return cells;
  }
	
  render() {
    return (
      <div className="board-container">
        {this.renderCells()}
      </div>
    )
  }
}

export default Board