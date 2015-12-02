var React = require('react')
var Data = require('./data')

var inputStyle = {
    width: '100%',
    margin: '10px 0',
};

var NewThingForm = React.createClass({
    addThing: function(opts) {
        Data.Thing.create({
            topic_id: this.props.topicId,
            name: opts.name,
            thing_type: opts.thingType
        }).then(function(newThing) {
            this.props.onNewThing(newThing);
            this.refs.newThingName.value = "";
        }.bind(this));
    },
    handleAddTodo: function(e) {
        e.preventDefault();

        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'todo'
        });
    },
    handleAddNote: function(e) {
        e.preventDefault();

        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'note'
        });
    },
    handleAddEvent: function(e) {
        e.preventDefault();

        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'event'
        });
    },
    render: function() {

        var noPadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };

        return <div className="row">
        <form className="col-md-6">
            <div className="input-group" style={inputStyle}>
                <input
                    ref="newThingName"
                    type="text"
                    className="form-control"
                    placeholder="Add new..."
                />
                <div className="input-group-btn input-group-sm">
                    <button
                        className="btn btn-primary"
                        onClick={ this.handleAddTodo }
                    >Todo</button>
                    <button
                        className="btn btn-info"
                        onClick={ this.handleAddNote }
                    >Note</button>
                    <button
                        className="btn btn-warning"
                        onClick={ this.handleAddEvent }
                    >Event</button>
                </div>
            </div>
        </form>
        </div>
    }
});

module.exports = NewThingForm
