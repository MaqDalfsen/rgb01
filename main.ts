let R = 0
let G = 0
let B = 0
let strip2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        B = 0
        G = 0
        R = 0
    }
})
