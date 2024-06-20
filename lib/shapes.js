class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

}

class Circle extends Shape {
    constructor(shapeColor, radius = 1) {
        super(shapeColor);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    render(text = '', textColor = 'black') {
        const svg = <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill="${this.shapeColor}" />
</svg>

}
}

class Square extends Shape (
    constructor(shapeColor, sideLength = 1) {
        super(shapeColor);
        this.sideLength = sideLength;
    }
    getArea() {
        return this.sideLength * this.sideLength;
    }
    render(text = '', textColor = 'black') {
        const svg = <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />
  <text x="100" y="60" font-family="Verdana" font-size="20" fill="${textColor}">{text}</text>
</svg>
    }
)

class Triangle extends Shape (
    constructor(shapeColor, base = 1, height = 1) {
        super(shapeColor);
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    render(text = '', textColor = 'black') {
        const svg = <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 150,190 50,190" fill="${this.shapeColor}" />
  <text x="100" y="100" font-family="Verdana" font-size="20" fill="${textColor}">{text}</text>
</svg>
    }
)

module.exports = {Square, Circle, Triangle};