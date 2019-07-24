const inputs = document.querySelectorAll('form .campo input');

inputs.forEach(input => {
    input.addEventListener('blur', validate);
});

inputs.forEach(input => {
    input.addEventListener('input', validate);
});

function validate(e) {
    const state = ['valid', 'no-valid'];

    let clase;
    if (e.target.value.length === 0) {
        clase = state[1];
    } else {
        clase = state[0];
    }

    e.target.classList.remove(...state);
    e.target.nextElementSibling.classList.remove(...state);

    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    if (clase === 'no-valid') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const err = document.createElement('div');
            err.appendChild(document.createTextNode('Este campo es obligatorio'));
            err.classList.add('alerta');

            e.target.parentElement.parentElement.insertBefore(err, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

const mostrar = document.getElementById('mostrar');

mostrar.addEventListener('click', e => {
    const passInput = document.getElementById('pass');

    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar'
        passInput.type = 'text';
    } else {
        e.target.classList.add('mostrar');
        e.target.textContent = 'Mostrar'
        passInput.type = 'password';
    }
});