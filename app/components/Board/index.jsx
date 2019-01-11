import React from 'react'
import './style.scss'
import Puzzle from './Puzzle'

class Board extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      board: []
    }
	}
	
  componentDidMount() {
    Puzzle.init()
    this.setState((prev) => {
      return {
        ...prev,
        board: Puzzle.getBoard()
      }
    });
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
    const { board } = this.state;
    var _board = board;
    if(cell) {
      _board[cell[0]][cell[1]] = 1;
      this.setState(() => {
        return {
          board: _board
        }
      })
      console.log(this.state.board);
    } else {
      console.log("Full, can't make any more moves!");
    }
  }

  highlightCell = (event) => {
    var id = event.target.id;
    var cell = this.getNextCell(id);
    if(cell) {
      console.log(cell);
    } else {
      console.log("Full, can't make any more moves!");
    }
  }
  
  renderCells = () => {
    var cells = [];
    for(var i = 0; i < 6; i++) {
      for(var j = 0; j < 7; j++) {
        var id = `${i}${j}`;
        cells.push(<div key={id} id={id} className="cell" onClick={(event) => this.makeMove(event)} onMouseOver={(event) => this.highlightCell(event)}></div>);
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