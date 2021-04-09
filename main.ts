input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Einkaufsliste[number2 - 1]))
    number2 += -1
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= Einkaufsliste.length - 1; index++) {
        serial.writeString("" + (Einkaufsliste[index]))
        serial.writeLine("")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Einkaufsliste[number + 1]))
    number += 1
})
let number2 = 0
let number = 0
let Einkaufsliste: string[] = []
Einkaufsliste = ["Curd", "Milk", "Cheese", "Bread", "Mango", "Mask", "Capsicum", "Brocoli", "Peach", "Cocoa-Drink", "Cornflakes"]
number = -1
number2 = Einkaufsliste.length
basic.forever(function () {
	
})
