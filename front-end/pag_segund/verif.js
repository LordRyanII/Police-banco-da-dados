function verif(){
    const web = []
    const info = (localStorage.getItem('login-1','senha-1', 'login-2','senha-2'))
    console.log(info)
    if(info === null){
        window.location.href = '../Acesso_negado/acesso.html'
        alert('Acesso negado')
        
    }
   
    
}