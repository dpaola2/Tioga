'use strict'

var React = require('react');
var TopicList = require('./topicList');
var Data = require('./data');

var BulletJournal = React.createClass({
    render: function() {
        Data.Topic.findAll();
        return <div>
        <div className="col-md-6"><TopicList kind="past" /></div>
        <div className="col-md-6"><TopicList kind="future" /></div>
        </div>
    }
});

module.exports = BulletJournal