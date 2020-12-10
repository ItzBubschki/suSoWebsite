import React from 'react';
import GameTile from "./tile";
import Button from '@material-ui/core/Button';
import * as API from "../../shared/API";

class GameField extends React.Component {
    constructor(props) {
        super(props);
        const emptyTiles = Array(9).fill(" ").map(() => Array(9).fill(""));
        this.state = {
            loading: false,
            tileValues: emptyTiles
        }
    }

    handleChange = (row, column, event) => {
        const {value} = event.target;
        if ((value >= 1 && value <= 9) || value === "") {
            const currentFieldValues = this.state.tileValues;
            currentFieldValues[row][column] = value;
            this.setState({tileValues: currentFieldValues});
        } else {
            throw new Error("invalid input");
        }
    }

    renderTileRows() {
        const rows = [];
        for (let i = 0; i < 9; i++) {
            const row = [];
            for (let j = 0; j < 9; j++) {
                row.push(<GameTile rowNumber={i} columnNumber={j} handleChange={this.handleChange}
                                   fieldValue={this.state.tileValues[i][j]}
                />);
            }
            rows.push(<div>{row}</div>);
        }
        return rows;
    }

    solveGame = async () => {
        const data = {data: this.state.tileValues};
        const filledField = await API.getFilledGameField(data);
        this.setState({tileValues: filledField});
    }

    render() {
        return (
            <div>
                <div className="game-field">
                    {this.renderTileRows()}
                </div>
                <div className="solve-game">
                    <Button variant="contained" color="primary" onClick={this.solveGame}>
                        Solve game
                    </Button>
                </div>
            </div>
        )
    }
}

export default GameField;