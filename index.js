let $check = document.querySelector('.check')


let $btn = document.getElementById('btn')
let $name = document.getElementById('name')
let $phone = document.getElementById('number')
let $email = document.getElementById('email')
let $select = document.getElementById('select')
let $size = document.querySelectorAll('.size')
let $additives = document.querySelectorAll('.additives')
let $addClass = document.querySelectorAll('.add')
let $item1 = document.querySelector('#order_name')
let $item2 = document.querySelector('#order_phone')
let $item3 = document.querySelector('#order_email')
let $list = document.querySelector('.order__list')
let $sizeText = document.querySelector('#size-text')
let $thickness = document.querySelector('#thickness')
let $onPizza = document.querySelector('#on-pizza')
let $addId = document.querySelector('#add')
let $total = document.querySelector('#total')


$btn.addEventListener('click', evt => {
    evt.preventDefault()
    
    $item1.textContent = `Name: ${$name.value}`
    $item2.textContent = `Phone: +${$phone.value}`
    $item3.textContent = `Email: ${$email.value}`
    
    for(let i = 0; i < $select.length; i++){
        if($select.checked){
            $thickness.innerHTML = `Dough thickness: ${$select[i].value}`
        }
    }
    for(let i = 0; i < $size.length; i++){
    
        if($size[0].checked){
            $sizeText.innerHTML = `Size: ${$size[0].value}`
        } else if($size[1].checked) {
            $sizeText.innerHTML = `Size: ${$size[1].value}`
        } else if($size[2].checked) {
            $sizeText.innerHTML = `Size: ${$size[2].value}`
        } else{
            $sizeText.innerHTML = `Size: none`
        }
        
    }

    $onPizza.innerHTML = null
    for(let i = 0; i < $additives.length; i++){
        if($additives[i].checked){
            $onPizza.innerHTML += `${$additives[i].name}, `
        }
    }

    $addId.innerHTML = null
    for(let i = 0; i < $addClass.length; i++){
        if($addClass[i].checked){
            $addId.innerHTML += `${$addClass[i].name}, `
        }
    }

})