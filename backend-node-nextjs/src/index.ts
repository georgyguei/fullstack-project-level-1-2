import express, { type Request, type Response } from 'express';
import cors from 'cors';
import {
  getAllNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote,
  type User,
  type Note,
} from './data-access/note';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/notes', async (req: Request, res: Response) => {
  const user = req.body as User;
  console.log('user:', req.body);
  try {
    const notes = await getAllNotes(user);
    return res.status(200).json(notes);
  } catch (error) {
    console.error('Error retrieving notes:', error);
    return res.status(500).json({ error: 'Could not retrieve notes' });
  }
});

app.get('/note/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const note = await getNoteById(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    return res.status(200).json(note);
  } catch (error) {
    console.error('Error retrieving note:', error);
    return res.status(500).json({ error: 'Could not retrieve note' });
  }
});

app.post('/note/new', async (req: Request, res: Response) => {
  const user = req.body.user as User;
  const note = req.body.note as Note;

  if (!note.title || !note.content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  if (typeof note.title !== 'string' || typeof note.content !== 'string') {
    return res
      .status(400)
      .json({ error: 'Title and content must be a string' });
  }

  try {
    const newNote = await addNote(user, note);
    return res.status(201).json(newNote);
  } catch (error) {
    console.error('Error adding note:', error);
    return res.status(500).json({ error: 'Could not add note' });
  }
});

app.put('/note/update', async (req: Request, res: Response) => {
  const user = req.body.user as User;
  const note = req.body.note as Note;

  if (!note.title || !note.content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  if (typeof note.title !== 'string' || typeof note.content !== 'string') {
    return res
      .status(400)
      .json({ error: 'Title and content must be a string' });
  }

  try {
    const updatedNote = await updateNote(user, note);
    return res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error updating note:', error);
    return res.status(500).json({ error: 'Could not update note' });
  }
});

app.delete('/note/delete', async (req: Request, res: Response) => {
  const user = req.body.user as User;
  const note = req.body.note as Note;

  if (!note.id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    await deleteNote(note.id);
    return res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    return res.status(500).json({ error: 'Could not delete note' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
