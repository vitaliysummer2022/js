document.querySelector('button').addEventListener('click', e => {
    const input = document.querySelector('input');
    e.preventDefault();

    if (input.type === 'password') {
        input.type = 'text';
        e.target.textContent = 'visibility_off';
    } else {
        input.type = 'password';
        e.target.textContent = 'visibility';
    }
});