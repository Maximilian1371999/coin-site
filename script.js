let tg = window.Telegram.WebApp;
tg.expand()
let btn = document.querySelector("#carrot")
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы заказали морковку")
        tg.MainButton.show()
    }
}
let btn = document.querySelector("#potato")
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы заказали картошку")
        tg.MainButton.show()
    }
}
