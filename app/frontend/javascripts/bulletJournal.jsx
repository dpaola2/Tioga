'use strict'

var React = require('react');
var TopicList = require('./topicList');
var TopicSearch = require('./topicSearch');
var NewTopic = require('./newTopic');
var Data = require('./data');

var BulletJournal = React.createClass({
    render: function() {
        Data.Topic.findAll();
        return <div>
        <div className="row">
        <div className="col-md-11">
        <TopicSearch />
        </div>
        </div>
        <div className="row">
        <div className="col-md-11">
        <NewTopic />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6"><TopicList kind="past" /></div>
        <div className="col-md-6"><TopicList kind="future" /></div>
        </div>
        </div>
    }
});

module.exports = BulletJournal