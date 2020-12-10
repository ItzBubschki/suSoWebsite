import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField"

class GameTile extends React.Component {
    fieldId;

    constructor(props) {
        super(props);
        this.state = {
            invalid: false,
            row: this.props.rowNumber,
            column: this.props.columnNumber
        }
    }

    handleInputChange = (event) => {
        try {
            this.props.handleChange(this.state.row, this.state.column, event);
            this.setState({invalid: false})
        } catch {
            this.setState({invalid: true})
        }
    }

    render() {
        return (
            <TextField data-rowNumber={this.props.rowNumber} data-columnNumber={this.props.columnNumber}
                       value={this.props.fieldValue} margin="dense"
                       onChange={this.handleInputChange} error={this.state.invalid} className="gameTile"
                       variant="outlined"
            />
        );
    }
}

GameTile.propTypes = {
    rowNumber: PropTypes.string,
    columnNumber: PropTypes.string,
    fieldValue: PropTypes.string,
    handleChange: PropTypes.func
}

export default GameTile;