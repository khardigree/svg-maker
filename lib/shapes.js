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
        const svg = 
}
}