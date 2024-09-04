const textArea = document.getElementById('note-text-area');
const savedMessage = document.getElementById("saved-message");

function postFunction() {
    const text = textArea.value;
    const noteId = window.location.search.slice(8);

    const data = {
        content: text,
        noteid: noteId
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/updatenote', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data));

    savedMessage.style.display = "block";
    setTimeout(() => {
        savedMessage.style.display = "none";
    }, 1500);
}