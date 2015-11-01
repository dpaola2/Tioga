var React = require('react');
var Data = require('./data');
var NewThingForm = require('./newThing')

var Topic = React.createClass({
    getInitialState: function () {
        return {
            things: this.props.topic.things
        };
    },
    handleNewThing: function(newThing) {
        Data.Topic.find(
            newThing.topic_id,
            {
                orderBy: 'created_at'
            }).then(function(topic) {
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


module.exports = Topic