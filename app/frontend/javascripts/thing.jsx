var React = require('react');
var Data = require('./data');

var Thing = React.createClass({
    getInitialState: function() {
        return this.getState();
    },
    getState: function() {
        var thing = Data.Thing.get(this.props.thing.id);

        return {
            thing: thing
        };
    },
    onChange: function() {
        this.setState(this.getState());
    },
    componentDidMount: function() {
        Data.Thing.on('change', this.onChange);
    },
    toggleComplete: function(e) {
        if (this.refs.completeCheckbox.checked) {
            this.state.thing.complete = true
        } else {
            this.state.thing.complete = false
        }
        this.state.thing.DSSave();
    },
    toggleLegit: function(e) {
        if (this.state.thing.legit == true) {
            this.state.thing.legit = false;
        } else {
            this.state.thing.legit = true;
        }
        this.state.thing.DSSave();
    },
    render: function() {
        var style = {};
        if (!this.state.thing.legit) {
            style = {
                'textDecoration': 'line-through',
                'color': 'grey'
            };
        }
        return <div className="row">
        <div className="col-md-1">
          <span className="glyphicon glyphicon-star" />
          &nbsp;
          <input type="checkbox" ref="completeCheckbox" defaultChecked={ this.state.thing.complete } onChange={ this.toggleComplete } />
          &nbsp;
          <span className="glyphicon glyphicon-remove" onClick={ this.toggleLegit } />
        </div>
        <div className="col-md-5" style={ style } >
          { this.state.thing.name }
        </div>
        </div>
    }
});

module.exports = Thing;
