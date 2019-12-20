
// ----------------------------------------------------------------------------

var wrapper = document.querySelector('.wrapper')
var width = wrapper.offsetWidth
var height = wrapper.offsetHeight

// ----------------------------------------------------------------------------
    ``
let VLOKE_COUNT = 2
let vlokjes = []
let stop = false

for (let i = 0; i < VLOKE_COUNT; i++) {
    vlokjes[i] = new Vlokje()
    vlokjes[i].create()
}
setInterval(_ => {
    for (let i = 0; i < VLOKE_COUNT; i++) {
        vlokjes[i].update()
    }
}, 100)

// ----------------------------------------------------------------------------