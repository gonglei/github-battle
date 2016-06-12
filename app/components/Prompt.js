var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Github Username"
                            value={props.username}
                            onChange={props.onUpdateUser}
                        />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            type="submit"
                            className="btn btn-block btn-success">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.propTypes =  {
    header: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        onUpdateUser: PropTypes.func.isRequired,
        onSubmitUser: PropTypes.func.isRequired
};

module.exports = Prompt;
