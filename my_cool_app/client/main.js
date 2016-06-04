import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  tasks:[
    {text:"this is task 1"},
    {text:"this is task 2"},
    {text:"this is task 3"}
  ]
});
