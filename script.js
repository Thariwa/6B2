const animal = 'sheep'
const cat = 'ram'
const deer = 'chicken'
const peacock = 'buffalo'



const list = document.getElementById('me')
const list1 = document.querySelectorAll('.you')

list.textContent = animal
list1[0].textContent = cat
list1[1].textContent = deer
list1[2].textContent = peacock

