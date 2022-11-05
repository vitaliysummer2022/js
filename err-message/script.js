document.querySelectorAll('input').forEach(el => {
    el.addEventListener('blur', () => {
        if (el.value.length === 0) {
            showErr(el, "Can't be blank");
        } else if (el.value.length > 8) {
            showErr(el, 'Max length is 8 chars');
        }
    });
});

function showErr(field, errText) {
    if (field.nextElementSibling 
        && field.nextElementSibling.textContent === errText) {
        return;
    }

    field.classList.add('field-err');

    const err = document.createElement('span');
    field.after(err);
    err.classList.add('err-message');
    err.textContent = errText;
    
    hideErr(field, err);
}

function hideErr(field, err) {
    field.addEventListener('input', () => {
        field.classList.remove('field-err');
        err.remove();
    });
}