'use strict'

var React = require('react');
var TopicList = require('./topicList');
var TopicSearch = require('./topicSearch');
var NewTopic = require('./newTopic');
var Data = require('./data');
var moment = require('moment');

var BulletJournal = React.createClass({
    getInitialState: function() {
        return {
            searchQuery: false,
            pastTopics: [],
            futureTopics: []
        };
    },
    searchChanged: function(query) {
        console.log(query);
        if (query.length > 0) {
            this.setState({
                searchQuery: query
            });
        } else {
            this.setState({
                searchQuery: false
            });
        }
    },
    searchTopics: function() {
        console.log("searching");
        var filterOpts = {
            where: {
                'name': {
                    'contains': this.state.searchQuery
                }
            }
        };
        var topics = Data.Topic.filter(filterOpts);
        return topics;
    },
    componentDidMount: function() {
        Data.Topic.findAll().then(function() {
            this.setState({
                pastTopics: this.pastTopics(),
                futureTopics: this.futureTopics()
            });
        }.bind(this));
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
        if (this.state.searchQuery != false) {
            console.log("rendering search results");
            contents = <div>
            <div className="col-md-6"><TopicList topics={ this.searchTopics() } /></div>
            </div>
        } else {
            contents = <div>
            <div className="col-md-6"><TopicList topics={ this.state.pastTopics } /></div>
            <div className="col-md-6"><TopicList topics={ this.state.futureTopics } /></div>
            </div>
        }

        return <div>
        <div className="row">
        <div className="col-md-12">
        <TopicSearch onChange={ this.searchChanged } style={{ margin: '10px 0' }} />
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <NewTopic style={{ margin: '10px 0' }} />
        </div>
        </div>
        <div className="row">
            { contents }
        </div>
        </div>
    }
});

module.exports = BulletJournal
