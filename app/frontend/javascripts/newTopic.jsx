'use strict'

var React = require('react');

var NewTopic = React.createClass({
    handleNewTopic: function(e) {
        e.preventDefault();

        var topicName = this.refs.topicName.value;
        Data.Topic.create({
            name: topicName
        }).then(function(newTopic) {
            this.refs.topicName.value = "";
        }.bind(this));
    },
    render: function() {
        return <div>
        <form className="form-inline">
        <input type="text" ref="topicName" className="form-inline form-control" placeholder="New Topic..." />
        <button className="btn btn-primary btn-sm form-control" onClick={ this.handleNewTopic }>Add Topic</button>
        </form>
        </div>
    }
});

module.exports = NewTopic;