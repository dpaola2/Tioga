'use strict'

var React = require('react');
var TopicList = require('./topicList');
var TopicSearch = require('./topicSearch');
var NewTopic = require('./newTopic');
var Data = require('./data');
var moment = require('moment');

var BulletJournal = React.createClass({
    searchChanged: function(query) {
        console.log(query);
    },
    componentDidMount: function() {
        Data.Topic.findAll();
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
        return topics;
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
        return topics;
    },
    render: function() {
        var contents;
        contents = <div>
        <div className="col-md-6"><TopicList topicQuery={ this.pastTopics } /></div>
        <div className="col-md-6"><TopicList topicQuery={ this.futureTopics } /></div>
        </div>

        return <div>
        <div className="row">
        <div className="col-md-11">
        <TopicSearch onChange={ this.searchChanged } />
        </div>
        </div>
        <div className="row">
        <div className="col-md-11">
        <NewTopic />
        </div>
        </div>
        <div className="row">
            {contents}
        </div>
        </div>
    }
});

module.exports = BulletJournal
