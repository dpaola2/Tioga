'use strict'

var React = require('react');
var Data = require('./data');

var Topic = function(props) {
    return <h2>{ props.data.name }</h2>
};

var TopicList = React.createClass({
    getInitialState: function() {
        return {
            topics: []
        }
    },
    
    componentDidMount: function() {
        var topics = Data.Topic.findAll().then(function(topics) {
            this.setState({
                topics: topics
            });
        }.bind(this));
    },
    
    render: function() {
        var topic_elements = this.state.topics.map(
            function(topic) {
                return <Topic data={ topic } key={ topic.id }/>
            }
        );
        return <div> { topic_elements } </div>
    }
});

module.exports = TopicList