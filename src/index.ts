function menuNav(){
    document.addEventListener('DOMContentLoaded', () => {
        const lis = document.querySelectorAll('.baixoNav li');
    
        lis.forEach(li => {
            const abrirMenu = li.querySelector('.abrirMenu') as HTMLElement;
            
            if (abrirMenu) {
                abrirMenu.style.display = 'none';
            }
    
            li.addEventListener('mouseenter', () => {
                if (abrirMenu) {
                    abrirMenu.style.display = 'block';
                }
            });
    
            li.addEventListener('mouseleave', () => {
                if (abrirMenu) {
                    abrirMenu.style.display = 'none';
                }
            });
        });
    });
}

menuNav();

function mostrarSenha(){
    const senha = document.getElementById('senha') as HTMLInputElement;
    const mostrar = document.getElementById('mostrarSenha') as HTMLElement;

    if(senha.type === 'password') {
            senha.setAttribute('type', 'text');
            mostrar.classList.replace('bi-eye', 'bi-eye-slash');
        } else {
            senha.setAttribute('type', 'password');
            mostrar.classList.replace('bi-eye-slash', 'bi-eye');
        }
    }

    function esquecerSenha(){
        window.alert("Enviaremos um código para seu email!");
    }