radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(5)
})
radio.setGroup(100)
