var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentDidMount: function() {
        console.log('componentDidMount');
        var query = this.props.location.query;
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount');
    },
    render: function() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
            />
        );
    }
});

module.exports = ConfirmBattleContainer;
