export default class NotesAPI {
    //すべてのメモを取得するAPI
    static getAllNOtes() {}

    //メモを保存するAPI
    static saveNote(noteToSave) {
    const notes = [];

        noteToSave.id = Math.floor(Math.random() * 100000);
        noteToSave.updated = new Date().toISOString();
    localStorage.setItem("notes", JSON.stringify(noteToSave));
    }
    

    //メモを削除するAPI
    static deleteNote() {}
}
