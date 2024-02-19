import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id} // Add a unique key prop here
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;
