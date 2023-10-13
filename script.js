let result = document.getElementById('div')

function get_Name(){
    let  name = prompt('Enter your name')
    
    
    if(name == null || name == ''){
        name = 'Guest'
    }
    
    result.innerHTML = `Hello ${name}`  



}



let button = document.getElementsByTagName('button')[0]
console.log(button)