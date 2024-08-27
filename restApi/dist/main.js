"use strict";
document.addEventListener('DOMContentLoaded', function () {
    formHandler('form');
});
async function formHandler(formId) {
    const form = document.getElementById(formId);
    const notify = document.getElementById('notify');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    form.addEventListener('submit', async function () {
        const formData = {
            name: nameInput.value,
            address: addressInput.value,
            email: emailInput.value
        };
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                notify.style.display = 'block';
                notify.textContent = '등록 완료';
                form.reset();
                setTimeout(() => {
                    notify.style.display = 'none';
                }, 3000);
            }
            else {
                alert("전송 실패");
            }
        }
        catch (error) {
            console.log(error);
            alert('전송 실패');
        }
    });
}
