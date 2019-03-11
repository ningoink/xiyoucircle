function rollingCard (nextPage) {
    let card2Page1 = document.getElementById('card2Page1')
    let card2Page2 = document.getElementById('card2Page2')
    let card2Btn1 = document.getElementById('card2Btn1')
    let card2Btn2 = document.getElementById('card2Btn2')

    switch (nextPage) {
        case 1:
            card2Page1.style.display = 'flex'
            card2Page2.style.display = 'none'
            card2Btn1.setAttribute('class', 'buttonActive')
            card2Btn2.setAttribute('class', '')
            break;
        case 2:
            card2Page1.style.display = 'none'
            card2Page2.style.display = 'flex'
            card2Btn1.setAttribute('class', '')
            card2Btn2.setAttribute('class', 'buttonActive')
        default:
            break;
    }
}

export default {
  rollingCard
}
