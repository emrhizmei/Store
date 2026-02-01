let btn = document.getElementById('button')

btn.addEventListener('click', function(){
    let Name = document.getElementById('Name').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value

    if (!Name || !contact || !email) {
        alert ("Please enter valid information.")
    } else {
        let Name = document.getElementById('Name')
        Name.innerText = Name
        let contact = document.getElementById('contact')
        contact.innerText = yourcontact
        let email = document.getElementById('email')
        email.innerText = youremail
        let balance1 = document.getElementById('balance1')
        balance1.innerText = Balance
        let products = document.getElementsByClassName('products')
        products[0].computedStyleMap.display='block'
        let button = document.getElementById('button')
        button[0].style.display='none'
    }

})


let Balance = 500
let buy=document.getElementsByClassName('buy')

buy[0].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[1].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[2].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})   
buy[3].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[4].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[5].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[6].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[7].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})