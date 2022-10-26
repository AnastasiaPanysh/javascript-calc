class Calculator {
    constructor[

    ]

    clear() {
        display.value = "";
    }
    calc() {
        display.value = eval(display.value);
    }
    press(x) {
        display.value += x;
    }
}