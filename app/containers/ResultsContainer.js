var React = require('react');
var Results = require('./../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores: [],
            playersInfo: []
        }
    },
    componentDidMount: function() {
        githubHelpers.battle(this.props.location.state.playersInfo).then(function(scores) {
            this.setState({
                isLoading: false,
                scores: scores,
                playersInfo: this.props.location.state.playersInfo
            });
        }.bind(this));
    },
    render: function() {
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playersInfo={this.props.location.state.playersInfo}
            />
        );
    }
});

module.exports = ResultsContainer;