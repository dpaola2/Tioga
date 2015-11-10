'use strict'

var moment = require('moment');

var React = require('react');
var Data = require('./data');
var Topic = require('./topic');

var TopicList = React.createClass({
    getInitialState: function() {
        return {
            topics: this.props.topics
        };
    },
    getState: function() {
        return {
            topics: this.props.topics
        };
    },
    componentDidMount: function() {
        Data.Topic.on('change', this.onChange);
        this.onChange();
    },
    onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
        var topic_elements = this.props.topics.map(
            function(topic) {
                return <Topic topic={ topic } key={ topic.id } />
            }
        );
        return <div> { topic_elements } </div>
    }
});

module.exports = TopicList