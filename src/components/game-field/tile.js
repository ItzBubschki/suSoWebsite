import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField"

class GameTile extends React.Component {
    fieldId;

    constructor(props) {
        super(props);
        this.state = {
            invalid: false
        }
    }

    render() {
        return (
            <TextField type="text" data-rowNumber={this.props.rowNumber} data-columnNumber={this.props.columnNumber}
                       value={this.props.fieldValue} margin="dense"
                       onChange={this.props.handleChange} error={this.state.invalid} className="gameTile"
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