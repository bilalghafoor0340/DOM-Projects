const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'we'){
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }
        if(e.target.id  === 'pink'){
            body.style.backgroundColor = 'pink';
        } 
        if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
            // body.add('purple');
            button.innerHTML = 'purple';
        }
        
    })
})