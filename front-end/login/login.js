//start_of_my_code

function clicar(){
    const btn = window.document.querySelector('#button')
    const matri = window.document.querySelector('#text_1')
    const password = window.document.querySelector('#password')
    const error_matri = window.document.querySelector('.error_matri')
    const error_password = window.document.querySelector('.error_password')
    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)//create token of verification
    let verif_credenciais = {
        login: '0001',
        senha: 'police',
        login_2: '0002',
        senha_2: 'civil'
    }
    const {login , login_2 , senha , senha_2} = verif_credenciais
//errors:
      if(matri.value.trim() === null || matri.value === '' ) {
        window.alert('[Erro] Preencha o campo matricula')
        error_matri.innerHTML = 'Ops, número da matrícula inválido!'
        matri.value = ''
        return

    } else if(password.value.trim() === null || password.value === ''){
        alert('[Erro] Preencha o campo senha')
        error_password.innerHTML = 'Ops, por favor preencha a senha!'
        password.value = ''
        return

//error_of_invalid_login

    }else if(matri.value !== login && matri.value !== login_2){
        alert('[ERRO] matricula inválida')
        error_matri.innerHTML = 'Verifique o login, ou entre em contato com administrador'
        matri.value = ''
    } else if(password.value !== senha && password.value !== senha_2){
        alert('[ERRO] Senha inválida')
        error_password.innerHTML = 'Verifique a senha, ou entre em contato com administrador'
        password.value = ''        
    
//Sucess 
    }else if( matri.value === login && password.value === senha){
        //alert('[SUCESSO] Redirecionando...')
        btn.setAttribute('class', 'passed')
        btn.value.innerHTML = 'Redirecionando...'
        setTimeout(function(){
            localStorage.setItem('token', token)
            window.location.href = '../loading/index.html'
        },800)
        
    }else if( matri.value === login_2 && password.value === senha_2){
        btn.setAttribute('class', 'passed')
        setTimeout(function(){
            localStorage.setItem('token', token)
            window.location.href = '../loading/index.html'
        },800)
        
        
    }
    
}

