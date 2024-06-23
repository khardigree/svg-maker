import {Circle, Square, Triangle} from './shapes';

describe ("circle", () => {
    test ("it should render a blue circle", () => {
        const correctCircle = `<circle cx="150" cy="150" r="80" fill="blue" />`;
        const circle = new Circle();
        circle.pickColor("blue");
        const result = circle.render();
        expect(result).toBe(correctCircle);
    });
});

describe ("square", () => {
    test ("it should render a red square", () => {
        const correctSquare = `<rect x="90" y="40" width="120" height="120" fill="red" />`;
        const square = new Square();
        square.pickColor("red");
        const result = square.render();
        expect(result).toBe(correctSquare);
    });
});

describe ("triangle", () => {
    test ("it should render a green triangle", () => {
        const correctTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
        const triangle = new Triangle();
        triangle.pickColor("green");
        const result = triangle.render();
        expect(result).toBe(correctTriangle);
    });
});

    