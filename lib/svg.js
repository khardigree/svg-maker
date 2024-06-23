class SVG {
    constructor() {
        this.textInput = '';
        this.shapeInput = '';
    }

render () {
    return `<svg version "1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
}

pickText(text, textColor) {
    if (text.length !== 3) {
        throw new Error('Text must be 3 characters long');
    }
    this.textInput = `<text x="150" y="100" fill="${textColor}" font-size="60" text-anchor="middle">${text}</text>`;
}
pickShape(shape) {
    this.shapeInput = shape.render();
}
}

module.exports = SVG;