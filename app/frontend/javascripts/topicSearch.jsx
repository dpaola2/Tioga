'use strict'

var React = require('react');

var TopicSearch = React.createClass({
    getInitialState: function() {
        return {
            focused: false,
        };
    },
    onChange: function(e) {
        e.preventDefault();

        this.props.onChange(this.refs.query.value);
    },
    onFocusChange: function() {
        this.setState({
            focused: !this.state.focused,
        });
    },
    render: function() {
        var className = this.state.focused ? 'expanding-input col-md-9' : 'expanding-input col-md-3';
        return <span style={this.props.style} className={className}>
        <input type="text" onFocus={this.onFocusChange} onBlur={this.onFocusChange} ref="query" className="form-control form-inline" placeholder="Search..." onChange={ this.onChange } />
        </span>
    }
});

module.exports = TopicSearch;
