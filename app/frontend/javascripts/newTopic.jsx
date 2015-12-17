'use strict'

var React = require('react');

var NewTopic = React.createClass({
    getInitialState: function() {
        return {
            focused: false,
        };
    },
    handleNewTopic: function(e) {
        e.preventDefault();

        var topicName = this.refs.topicName.value;
        Data.Topic.create({
            name: topicName
        }).then(function(newTopic) {
            this.refs.topicName.value = "";
        }.bind(this));
    },
    handleFocusChange: function(e) {
        this.setState({
            focused: !this.state.focused,
        });
    },
    render: function() {
        var focused = this.state.focused;
        var className = focused ? 'expanding-input col-md-6' : 'expanding-input col-md-3';
        var buttonMarkup = null;
        if (focused) {
            buttonMarkup = <span className="input-group-btn">
                <button
                    className="btn btn-primary"
                    onClick={ this.handleNewTopic }
                >Add Topic</button>
            </span>;
        }
        return <div style={this.props.style} className={className}>
        <form>
            <div className={focused ? 'input-group' : ''}>
                <input
                    type="text"
                    ref="topicName"
                    className="form-control"
                    onFocus={this.handleFocusChange}
                    onBlur={this.handleFocusChange}
                    placeholder="New Topic..."
                />
                {buttonMarkup}
            </div>
        </form>
        </div>
    }
});

module.exports = NewTopic;
