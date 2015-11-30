require('./data');

var React = require('react');
var ReactDOM = require('react-dom');
var BulletJournal = require('./bulletJournal');
var Data = require('./data');

ReactDOM.render(<BulletJournal />, document.getElementById('content'));
window.Data = Data;
window.moment = require('moment');

