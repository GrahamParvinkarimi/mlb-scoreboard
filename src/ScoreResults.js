import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ScoreResultsRow from './ScoreResultsRow';

class ScoreResults extends PureComponent {
	  render() {
    return (
      <div className="component-score-results">
        {this.props.scoreData.map((scoreData) =>
              <ScoreResultsRow
                key={scoreData.game.ID}
                awayTeam={scoreData.game.awayTeam.Abbreviation}
                homeTeam={scoreData.game.homeTeam.Abbreviation}
                awayScore={scoreData.awayScore}
                homeScore={scoreData.homeScore}
              />
          )}
      </div>
    );
  }
}
ScoreResults.propTypes = {
  ScoreData: PropTypes.array,
};

export default ScoreResults;