//start_of_my_code
function verific_acesso(){
    const web = []
    const info = web.push(localStorage.getItem('login-1','senha-1', 'login-2','senha-2'))
    console.log(info)
    if(info === null && info === ''){
        return window.location.href = '../loading/index.html'
        
    }
   
    
}
    
