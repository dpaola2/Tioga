var React = require('react')
var Data = require('./data')

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
        return <div className="row">
        <div className="col-md-offset-1">
        <form onSubmit={ this.handleSubmit } className="form-inline">
        <input ref="newThingName" type="text" className="form-control" />
        &nbsp;
        <input type="submit" className="btn btn-primary btn-sm form-control" value="Add Thing" />
        </form>
        </div>
        </div>
    }
});

module.exports = NewThingForm