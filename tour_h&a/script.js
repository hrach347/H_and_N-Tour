function scr(where){
let i = window.scrollY
let s = setInterval(function(){
i+=10
window.scrollTo(0,i)
if(i>=where){
clearInterval(s)
}
},1)
}
function toTop() {
    let i = 2800
    let tti = setInterval(function () {
        window.scrollTo(0, i)
        i -= 10
        if (i <= 0) {
            clearInterval(tti)
        }
    }, 1)

}