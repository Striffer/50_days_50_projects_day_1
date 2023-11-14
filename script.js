function hiddenName () {
    document.querySelectorAll('#panel h3').forEach(name => {
        name.style.visibility = 'hidden'
        name.style.opacity = '0'
        name.style.transition = '0s'
    })
}

hiddenName()

const img1 = document.querySelector('.img_1')
const img2 = document.querySelector('.img_2')
const img3 = document.querySelector('.img_3')
const img4 = document.querySelector('.img_4')
const img5 = document.querySelector('.img_5')

img1.addEventListener('click', () => {
    document.getElementById('panel_active').id = 'panel'
    hiddenName()
    img1.id = 'panel_active'
    img1.style.transition = '1s'
    document.querySelector('.img_1 h3').style.opacity = '1'    
    document.querySelector('.img_1 h3').style.visibility = 'visible'
    document.querySelector('.img_1 h3').style.transition = 'opacity 2s ease-in-out'    
})

img2.addEventListener('click', () => {
    document.getElementById('panel_active').id = 'panel'
    hiddenName()
    img2.id = 'panel_active'
    img2.style.transition = '1s'
    document.querySelector('.img_2 h3').style.opacity = '1'     
    document.querySelector('.img_2 h3').style.visibility = 'visible'
    document.querySelector('.img_2 h3').style.transition = 'opacity 2s ease-in-out'
})

img3.addEventListener('click', () => {
    document.getElementById('panel_active').id = 'panel'
    hiddenName()
    img3.id = 'panel_active'
    img3.style.transition = '1s'
    document.querySelector('.img_3 h3').style.opacity = '1'     
    document.querySelector('.img_3 h3').style.visibility = 'visible'
    document.querySelector('.img_3 h3').style.transition = 'opacity 2s ease-in-out'
})

img4.addEventListener('click', () => {
    document.getElementById('panel_active').id = 'panel'
    hiddenName()
    img4.id = 'panel_active'
    img4.style.transition = '1s'
    document.querySelector('.img_4 h3').style.opacity = '1'     
    document.querySelector('.img_4 h3').style.visibility = 'visible'
    document.querySelector('.img_4 h3').style.transition = 'opacity 2s ease-in-out'
})

img5.addEventListener('click', () => {
    document.getElementById('panel_active').id = 'panel'
    hiddenName()
    img5.id = 'panel_active'
    img5.style.transition = '1s' 
    document.querySelector('.img_5 h3').style.opacity = '1'    
    document.querySelector('.img_5 h3').style.visibility = 'visible'
    document.querySelector('.img_5 h3').style.transition = 'opacity 2s ease-in-out'
})