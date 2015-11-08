'use strict'

var moment = require('moment');

var React = require('react');
var Data = require('./data');
var Topic = require('./topic');

var TopicList = React.createClass({
    getInitialState: function() {
        return {
            topics: []
        }
    },
    getState: function() {
        if (this.props.kind == "past") {
            return this.pastTopics();
        } else if (this.props.kind == "future") {
            return this.futureTopics();
        }
    },
    pastTopics: function() {
        var today = parseInt(moment(Date.now()).format("YYYYMMDD"));
        var filterOpts = {
            where: {
                'day_key': {
                    '<=': today 
                }
            },
            orderBy: [
                ['day_key', 'DESC']
            ],
            limit: 25
        };
        
        var topics = Data.Topic.filter(filterOpts);
        return {
            topics: topics
        };
    },
    futureTopics: function() {
        var today = parseInt(moment(Date.now()).format("YYYYMMDD"));
        var filterOpts = {
            where: {
                'day_key': {
                    '>': today
                },
            },
            orderBy: [
                ['day_key']
            ],
            limit: 25
        };
        var topics = Data.Topic.filter(filterOpts);
        return {
            topics: topics
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
        var topic_elements = this.state.topics.map(
            function(topic) {
                return <Topic topic={ topic } key={ topic.id } />
            }
        );
        return <div> { topic_elements } </div>
    }
});

module.exports = TopicList