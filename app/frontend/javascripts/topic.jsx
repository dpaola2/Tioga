var React = require('react');
var Data = require('./data');
var Thing = require('./thing');
var NewThingForm = require('./newThing');

var Topic = React.createClass({
    getInitialState: function () {
        return {
            things: this.props.topic.things
        };
    },
    handleNewThing: function(newThing) {
        Data.Topic.find(
            newThing.topic_id, {
                orderBy: 'created_at'
            }
        ).then(function(topic) {
            this.setState({
                things: topic.things
            });
        }.bind(this));
    },
    render: function() {
        var things = this.state.things.map(function(thing) {
            return <Thing thing={ thing } key={ thing.id } />
        });
        return <div>
        <h2>{ this.props.topic.name }</h2>
        { things }
        <NewThingForm onNewThing={ this.handleNewThing } topicId={ this.props.topic.id } />
        </div>
    }
});


module.exports = Topic