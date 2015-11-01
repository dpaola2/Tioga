'use strict'

var React = require('react');
var Data = require('./data');

var Topic = React.createClass({
    render: function() {
        var things = this.props.data.things.map(function(thing) {
            console.log(thing);
            return <div className="row">
            <div className="col-md-1"><span className="glyphicon glyphicon-star" /></div>
            <div className="col-md-1"><input type="checkbox" /></div>
            { thing.name }
            </div>
        });
        return <div>
        <h2>{ this.props.data.name }</h2>
        { things }
        </div>
    }
});

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
        return <div className="container"> { topic_elements } </div>
    }
});

module.exports = TopicList