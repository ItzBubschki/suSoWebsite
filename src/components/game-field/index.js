import React from 'react';
import GameTile from "./tile";
import Button from '@material-ui/core/Button';

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tileValues: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        if ((value >= 1 && value <= 9) || value === "") {
            const currentFieldValues = this.state.tileValues;
            currentFieldValues[name] = value;
            this.setState({tileValues: currentFieldValues});
        } else {
            throw new Error("invalid input");
        }
    }

    renderTileRow(rowNumber) {
        const row = [];
        for (let i = 0; i < 9; i++) {
            row.push(<GameTile rowNumber={rowNumber} handleChange={this.handleChange} columnNumber={i}/>);
        }
        return row;
    }

    solveGame = () => {

    }

    render() {
        return (
            <div>
                <div className="game-field">
                    <div className="row first-row">
                        {this.renderTileRow(0)}
                    </div>
                    <div className="row mid-row">
                        {this.renderTileRow(1)}
                    </div>
                    <div className="row bottom-row">
                        {this.renderTileRow(2)}
                    </div>
                    <div className="row top-row">
                        {this.renderTileRow(3)}
                    </div>
                    <div className="row mid-row">
                        {this.renderTileRow(4)}
                    </div>
                    <div className="row bottom-row">
                        {this.renderTileRow(5)}
                    </div>
                    <div className="row top-row">
                        {this.renderTileRow(6)}
                    </div>
                    <div className="row mid-row">
                        {this.renderTileRow(7)}
                    </div>
                    <div className="row bottom-row">
                        {this.renderTileRow(8)}
                    </div>
                </div>
                <div className="solve-game">
                    <Button variant="contained" color="primary">
                        Solve game
                    </Button>
                </div>
            </div>
        )
    }
}

export default GameField;