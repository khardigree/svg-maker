class SVG {
    constructor() {
        this.textInput = '';
        this.shapeInput = '';
    }

render () {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeInput}${this.textInput}</svg>`
}

pickText(text, textColor) {
    if (text.length !== 3) {
        throw new Error('Text must be 3 characters long');
    }
    this.textInput = `<text x="50%" y="60%" fill="${textColor}" font-size="40" text-anchor="middle">${text}</text>`;
}
pickShape(shape) {
    this.shapeInput = shape.render();
}
}

module.exports = SVG;