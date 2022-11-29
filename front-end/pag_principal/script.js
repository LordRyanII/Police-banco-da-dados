//start_of_my_code
function verific_acesso(){
    const web = localStorage.getItem('login-1','senha-1', 'login-2','senha-2')
    const info =[web]
    if(info === null && info === ''){
        window.location.href = '../loading/index.html'
        
    }
   
    
}
    
