document.addEventListener('DOMContentLoaded', function () {
    formHandler('form');
})
async function formHandler(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    const notify = document.getElementById('notify') as HTMLDivElement;
    const nameInput = document.getElementById('name') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLFormElement;
    const addressInput = document.getElementById('address') as HTMLFormElement;

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
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                notify.style.display = 'block';
                notify.textContent = '등록 완료';
                form.reset();
                setTimeout(() => {
                    notify.style.display = 'none'
                }, 3000);
            } else {
                alert("전송 실패");
            }
        } catch (error) {
            console.log(error);
            alert('전송 실패')
        }
    })
}