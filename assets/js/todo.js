'use strict';

const $ = require('jquery');
const TodoApp = require('./Components/TodoApp');

require('../css/styles.css');

$(document).ready(function() {
    let wrapper = $('.main-content');
    let todoApp= new TodoApp(wrapper);
});
