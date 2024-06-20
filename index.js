//dependencies 
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const { type } = require('os');
//add shapes 
//add inputs 


//User input questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What do you want your logo to say?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ['square', 'circle', 'triangle'],
    }
    {
        type: 'input',
        name: 'color',
        message: 'What color do you want your logo to be? Please enter a color name or hex code.',
        //add validation for color name or hex code
    }
];

//initialize the app

