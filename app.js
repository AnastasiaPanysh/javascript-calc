class Calculator {
    constructor(){
        this.clear()
        this.calc()
    }

    clear() {
        document.querySelector('.display').value = "";
    }
    calc() {
        document.querySelector('.display').value = eval( document.querySelector('.display').value);
    }
    press(x) {
        document.querySelector('.display').value += x;
    }
}