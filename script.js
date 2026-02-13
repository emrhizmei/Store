let btn = document.getElementById('button')
let Balance = 0 

btn.addEventListener('click', function(){
    let Name = document.getElementById('Namel').value
    let contact = document.getElementById('contactl').value
    let email = document.getElementById('emaill').value
    let age = document.getElementById('agel').value
    let gender = document.getElementById('genderl').value
    let Balance1 = document.getElementById('balancel').value

    if (!Name || !contact || !email || !age || !Balance1 || !gender) {
        alert ("Please enter valid information.")
    } else {
        let Name2 = document.getElementById('yourname')
        Name2.innerText = Name
        let contact2 = document.getElementById('yourcontact')
        contact2.innerText = contact
        let email2 = document.getElementById('youremail')
        email2.innerText = email
        let age2 = document.getElementById('yourage')
        age2.innerText = age
        let gender2 = document.getElementById('yourgender')
        gender2.innerText = gender
        let Balance2 = document.getElementById('balance')
        Balance += parseInt(Balance1)
        Balance2.innerText = Balance
        let label = document.getElementsByClassName('label-input')
        label[0].style.display = 'none'
        let input = document.querySelector('.input')
        input.classList.add("active")
        let productContainer = document.querySelector('.product-container')
        productContainer.classList.add("active")
    }
})

let buy=document.getElementsByClassName('buy')

buy[0].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById('balance')
        balancel.innerText = Balance       
    } else{
        alert('You do not have enough balance')
    }   
})

buy[1].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance  
    } else{
        alert('You do not have enough balance')
    }
    
})
buy[2].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance  
    } else{
        alert('You do not have enough balance')
    }   
})   

buy[3].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    } 
})

buy[4].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
})

buy[5].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
})

buy[6].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }   
})

buy[7].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balance')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
})

