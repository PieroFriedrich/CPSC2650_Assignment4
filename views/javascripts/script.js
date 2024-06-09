document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const noteId = button.getAttribute('data-id');
            fetch(`/notes/${noteId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    button.parentElement.remove();
                } else {
                    console.error('Error deleting note:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Error deleting note:', error);
            });
        });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    
    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const noteContainer = button.parentElement.querySelector('.note-text');
            
            noteContainer.contentEditable = true;
            noteContainer.focus();
            
            noteContainer.addEventListener('blur', () => {
                const newText = noteContainer.innerText.trim();
                const noteId = button.getAttribute('data-id');
                
                fetch(`/notes/${noteId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: newText })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to update note');
                    }
                })
                .catch(error => {
                    console.error('Error updating note:', error);
                });
            });
        });
    });
});
