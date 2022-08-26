import { initializeEditPage, generateLastEdited } from "./views"
import { updateNotes, removeNote } from "./notes"

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleElement.addEventListener('input', e => {
    const note = updateNotes(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updateAt)
})


bodyElement.addEventListener('input', e => {
    const note = updateNotes(noteId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updateAt)
})


removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('../public/index2.html')
})


window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})


