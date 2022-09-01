/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// 1 variantas susikuria objektas kartu su atliktai matematiniais veiksmais:
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = this.a + this.b;
    this.subtraction = this.a - this.b;
    this.multiplication = this.a * this.b;
    this.division = this.a / this.b;
};

const calculator1 = new Calculator(2, 2);
const calculator2 = new Calculator(6, 3);

console.log(calculator1, calculator2);

// 2 variantas su metodais:
function Calculator2(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function () {
        return this.a + this.b
    }

    this.subtraction = function () {
        return this.a - this.b
    }

    this.multiplication = function () {
        return this.a * this.b
    }

    this.division = function () {
        return this.a / this.b
    }
};

const calculator3 = new Calculator2(2, 2);

console.log(calculator3.sum(), calculator3.subtraction(), calculator3.multiplication(), calculator3.division());