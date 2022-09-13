input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (Truth_or_Dare == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (Arrow == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Arrow == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Arrow == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
let Truth_or_Dare = 0
let Arrow = 0
Arrow = randint(1, 4)
Truth_or_Dare = randint(0, 1)
basic.showString("Truth or Dare")
basic.forever(function () {
	
})
