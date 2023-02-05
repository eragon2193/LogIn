document.addEventListener('DOMContentLoaded', function (){ 

document.getElementsByClassName('submit').addEventListener('click', function(){
  
  const cpassword = document.getElementById('cpwd')
  const password = document.getElementById('pwd')
  if(cpassword.innerText === password.innerText)
  {
    alert('log in')
  }
    else {
      alert('make sure password match')
    } 
})})
