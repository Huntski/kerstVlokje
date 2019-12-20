/*
*       Deze class maakt een vlokje UwU
*/

class Vlokje {
    constructor() {
        this._svg = codeSVGvlok
        this._x = null
        this._s = (Math.random() * 50) + 30
        this._r = null
        this._speed  = null
        this._rgb  = null
        this._element = null
    }

    create () {
        if (this._element) return console.error('Element already created')
        let html = `<div class='vlokje'>${this._svg}</div>`
        wrapper.innerHTML = wrapper.innerHTML + html;
        this._element = document.querySelector('.wrapper .vlokje:last-child')
        this.reset()
    }

    reset () {
        this._z = (Math.random() * 60 + 30),
        this._x = Math.random() * width
        this._y = 0 - this._z - 10
        this._speed = Math.random() * 3 + 2
        this._element.style.width = `${this._z}px`
        this._element.style.height = `${this._z}px`
        this._element.style.left = `${this._x}px`
    }

    move () {
        if (this._y > height) this.reset()
        this._y += this._speed
        this._y += this._speed
        this._r += 3;
        this._element.style.top = `${this._y}px`
        this._element.style.top = `${this._y}px`
        this._element.style.left = `${this._x}px`
        this._element.style.transform = `rotate(${this._r}deg)`
    }

    update () {
        if (stop) return
        this.move()
        console.log(this._y)
    }
}