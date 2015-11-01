'use strict'

var React = require('react');
var Data = require('./data');

var NewThingForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        
        Data.Thing.create({
            topic_id: this.props.topicId,
            name: this.refs.newThingName.value
        }).then(function (newThing) {
            this.props.onNewThing(newThing);
        }.bind(this));
    },
    render: function() {
        return <form onSubmit={ this.handleSubmit }>
        <input ref="newThingName" type="text" /><input type="submit" className="btn btn-primary" value="Add Thing" />
        </form>
    }
});

var Topic = React.createClass({
    getInitialState: function () {
        return {
            things: this.props.topic.things
        };
    },
    handleNewThing: function(newThing) {
        Data.Topic.find(newThing.topic_id).then(function(topic) {
            this.setState({
                things: topic.things
            });
        }.bind(this));
    },
    render: function() {
        var things = this.state.things.map(function(thing) {
            console.log(thing);
            return <div className="row">
            <div className="col-md-1"><span className="glyphicon glyphicon-star" /></div>
            <div className="col-md-1"><input type="checkbox" /></div>
            { thing.name }
            </div>
        });
        return <div>
        <h2>{ this.props.topic.name }</h2>
        { things }
        <NewThingForm onNewThing={ this.handleNewThing } topicId={ this.props.topic.id } />
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
                return <Topic topic={ topic } key={ topic.id } />
            }
        );
        return <div className="container"> { topic_elements } </div>
    }
});

module.exports = TopicList