//dependencies 
const inquirer = require('inquirer');
const SVG = require('./svg');
const {writeFile} = require('fs/promises');
const {Circle, Square, Triangle} = require('./shapes');



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

                let newShape;
                switch (shape) {
                    case 'Circle':
                        newShape = new Circle();
                        break;
                    case 'Square':
                        newShape = new Square();
                        break;
                    case 'Triangle':
                        newShape = new Triangle();
                        break;
                    default:
                        throw new Error('Invalid shape');
                }

                console.log(shape, color, text, textColor);

                newShape.pickColor(color);
                console.log(newShape);

                const svg = new SVG();
                svg.pickText(text, textColor);
                svg.pickShape(newShape);
                return writeFile('./examples/shape.svg', svg.render());
            })
            .then(() => {
                console.log('Shape created!');
            })
            .catch((error) => console.error(error));
    }
}
//initialize the app
module.exports = CLI;

