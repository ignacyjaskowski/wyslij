let a = 0
let n = 0
input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(1)
    a = a - 1
    basic.showNumber(a)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    n = n + 1
    basic.showNumber(n)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(2)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
    n = n - 1
    basic.showNumber(n)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(4)
    a = a + 1
    basic.showNumber(a)
})
