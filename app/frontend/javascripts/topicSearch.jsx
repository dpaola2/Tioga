'use strict'

var React = require('react');

var TopicSearch = React.createClass({
    render: function() {
        return <span>
        <input type="text" className="form-control form-inline" placeholder="Search..." />
        </span>
    }
});

module.exports = TopicSearch;