'use strict'

var React = require('react');
var TopicList = require('./topicList');

var BulletJournal = React.createClass({
    render: function() {
        return <div>
        <div className="col-md-6"><TopicList kind="past" /></div>
        <div className="col-md-6"><TopicList kind="future" /></div>
        </div>
    }
});

module.exports = BulletJournal