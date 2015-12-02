'use strict'

var React = require('react');

var TopicSearch = React.createClass({
    onChange: function(e) {
        e.preventDefault();

        this.props.onChange(this.refs.query.value);
    },
    render: function() {
        return <span style={this.props.style}>
        <input type="text" ref="query" className="form-control form-inline" placeholder="Search..." onChange={ this.onChange } />
        </span>
    }
});

module.exports = TopicSearch;
