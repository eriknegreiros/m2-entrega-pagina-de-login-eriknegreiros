class Modal {
    static openModal(){
       const esqueciSenhaBtn = document.querySelector('.login-esqueci-senha-btn')
       
        const modal = document.querySelector('.modal-esqueci-senha')

        esqueciSenhaBtn.addEventListener('click', (event) =>{
            event.preventDefault()
            modal.classList.toggle('close-modal')
        })
    }
    static closeModal(){
        const modal = document.querySelector('.modal-esqueci-senha')

        const closeBtn = document.querySelector('.close-modal-btn')

        closeBtn.addEventListener('click', (event) =>{
            event.preventDefault()
            modal.classList.toggle('close-modal')
        })

    }
}

Modal.openModal()
Modal.closeModal()