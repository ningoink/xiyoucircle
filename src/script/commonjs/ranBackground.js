function ranBackground () {
    // let arr = ['#FFD9E8', '#B7CFF3', '#BEF9BF', '#F8DFBA', '#BBEDF6', '#FFC3B3']
    let arr = [['#BFC8F7','#C4DDED','#CDCDCD','#F8DFBA'],['#DDF3BE','#FCCCB7']]
    let e1 = arr[0][parseInt(Math.random() * arr.length )]
    let e2 = arr[1][parseInt(Math.random() * arr.length )]
    console.log('颜色',e1,e2)
    let BackgroundDiv = document.querySelector('#card1')
    BackgroundDiv.style.cssText = `background:-webkit-linear-gradient(45deg,${e1},${e2});`

}

export default {
  ranBackground
}
