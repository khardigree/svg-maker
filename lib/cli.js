//dependencies 
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const { Circle, Square, Triangle } = require('./shapes');
const SVG = require('svg.js');
const {writeFile} = require('fs').promises;
//add inputs 


//User input questions
class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like to create?',
                    choices: ['Circle', 'Square', 'Triangle']
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'What color would you like the shape to be?'
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like to add to the shape? Please pick 3 characters.',
                    validate: (text) =>
                        text.length === 3 ? true : 'Text must be 3 characters long'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like the text to be?'
                }
            ])
            .then(({ shape, color, text, textColor }) => {
                shape.pickColor(color);

                const svg = new SVG();
                svg.pickText(text, textColor);
                svg.pickShape(shape);
                return writeFile('shape.svg', svg.render());
            })
            .then(() => {
                console.log('Shape created!'.green);
            })
            .catch((error) => console.error(error.red));
    }
}
//initialize the app
module.exports = CLI;

