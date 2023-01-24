class LinearRegression {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tempX = x.slice(0, y.length);
        this.b1;
        this.b0;
    }
    produto(x, y) {
        return x.map((val, i) => val * y[i]);
    }

    quadrado(x) {
        return x.map(val => val ** 2);
    }

    somatorio(x) {
        return x.reduce((total, val) => total + val, 0);
    }

    media(x) {
        return this.somatorio(x) / x.length;
    }

    resultados() {
        const resultado1 = this.somatorio(this.tempX) * this.somatorio(this.y) / this.y.length;
        const resultado2 = this.somatorio(this.tempX) ** 2 / this.y.length;
        const resultado3 = this.somatorio(this.produto(this.tempX, this.y)) - resultado1;
        this.b1 = resultado3 / (this.somatorio(this.quadrado(this.tempX)) - resultado2);
        this.b0 = this.media(this.y) - (this.b1 * this.media(this.tempX));
    }

    predict() {
        this.resultados();
        return this.x.map((val,i) => ({x:val, y: this.b1 * val + this.b0}));
    }
}

const lr = new LinearRegression([1, 2, 3, 4, 5, 6, 7], [9, 18, 27, 36]);
const results = lr.predict();
console.log(results);
