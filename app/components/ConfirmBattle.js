var React = require('react');

function ConfirmBattle(props) {
    return (
        props.isLoading
        ? (<p> LOADING </p>)
        : (<p> START BATTLE </p>)
    );
}

module.exports = ConfirmBattle;
