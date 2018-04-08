import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ScoreResultsRow.css';

class ScoreResultsRow extends PureComponent {
  render() {
    return (
      <div 
        className="component-score-result-row"
      >
      	<img
      	  alt={this.props.homeTeam}
          src={require('./logos/' + this.props.homeTeam + '.png')}
        />
        <span
          className="title"
        >
          {this.props.homeScore}
        </span>
        &nbsp;
        &nbsp;
         <span
          className="title bold"
        >
          AT
        </span>
        &nbsp;
        &nbsp;
        <img
          alt={this.props.awayTeam}
          src={require('./logos/' + this.props.awayTeam + '.png')}
        />
        <span
          className="title"
        >
          {this.props.awayScore}
        </span>
        &nbsp;
        &nbsp;
        <span
          className="title bold"
        >
          (F)
        </span>
      </div>
    );
  }
}
ScoreResultsRow.propTypes = {
  awayTeam: PropTypes.string,
  awayScore: PropTypes.string,
  homeTeam: PropTypes.string,
  homeScore: PropTypes.string,
};
export default ScoreResultsRow;