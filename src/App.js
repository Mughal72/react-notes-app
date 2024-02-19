import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is my first note!',
            date: '15/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my second note!',
            date: '21/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my third note!',
            date: '28/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my new note!',
            date: '30/04/2021',
        },
    ]);

    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
        localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes));
    };

    const deleteNote = (id) => {
        // Filter out the note with the specified id
        const newNotes = notes.filter((note) => note.id !== id);
        // Update the state with the filtered notes
        setNotes(newNotes);
        // Do not update local storage here
    };

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};

export default App;
