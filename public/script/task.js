document.addEventListener('DOMContentLoaded'), () => {
    document.querySelectorAll('.actions button').forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault()

            const form = button.closest('form')
            const id = form.querySelector('input[name="id"]').value
            const done = form.querySelector('input[name="done"]').value === 'true'

            try {
                const response = await fetch('/tasks/toggle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id, done })
                })

                if (response.ok) {
                    const taskItem = button.closest('li');
                    if (done) {
                        taskItem.querySelector('.title').classList.remove('done')
                        form.querySelector('input[name="done"]').value = 'false'
                    }
                    else {
                        taskItem.querySelector('.title').classList.add('done')
                        form.querySelector('input[name="done"]').value = 'true'
                    }
                } else {
                    console.error('Falha na atualização dos status')
                }
            } catch(error) {
                console.error('Erro na atualização dos status da tarefa')
            }
        })
    })
}