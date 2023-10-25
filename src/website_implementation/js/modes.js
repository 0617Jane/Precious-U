let model = document.getElementById('model')
let bigImg = document.getElementById('bigImg')
const imgList = {
    groupMode: [
        'basketball','cycling','equestrian',
        'football','group','hockey',
        'marathon','motorcycling','rowing'
    ],
    singleMode: [
        'about_bg','golf','gym1',
        'gym2','gym3','gym4',
        'running','skiing','surfing'
    ]
}
var scrorllTop = 0
// show big img
function handleShowBigImg (type) {
    console.log(window.scrollY)
    scrorllTop = window.scrollY
    // show random img
    // 0 ~ 9
    let randomNumber = parseInt(Math.random()*9)
    if (type !=='all') {
        bigImg.src = './images/'+type+'/'+imgList[type][randomNumber]+'.jpg'
    } else {
        let isgroup = Math.round(Math.random()) === 0 ? 'groupMode' : 'singleMode'
        bigImg.src = './images/'+isgroup+'/'+imgList[isgroup][randomNumber]+'.jpg'
    }
    // show img
    model.style.display = 'flex'
    // stop body scroll
    document.documentElement.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
}
// hidden big img
function handleClose () {
    // close img
    model.style.display = 'none'
    // open body scroll
    document.documentElement.style.overflow = 'scroll'
    document.body.style.position = 'static'
    window.scrollTo(0,scrorllTop);
}