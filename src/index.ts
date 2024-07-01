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