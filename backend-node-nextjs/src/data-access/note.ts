import type { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

export type User = Prisma.UserCreateInput;
export type Note = Prisma.NoteCreateInput;

export const getAllNotes = async (user: User) => {
  try {
    const notes = await prisma.note.findMany({
      where: { userId: user.id },
    });

    return notes;
  } catch (error) {
    console.error('Error retrieving notes:', error);
    throw new Error('Could not retrieve notes');
  }
};

export const getNoteById = async (noteId: string) => {
  try {
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      throw new Error('Note not found');
    }

    return note;
  } catch (error) {
    console.error('Error retrieving note:', error);
    throw new Error('Could not retrieve note');
  }
};

export const addNote = async (user: User, note: Note) => {
  try {
    const createdNote = await prisma.note.create({
      data: {
        ...note,
        user: {
          connectOrCreate: {
            where: { id: user.id },
            create: {
              id: user.id,
              email: user.email,
            },
          },
        },
      },
    });
    return createdNote;
  } catch (error) {
    console.error('Error adding note:', error);
    throw new Error('Could not add note');
  }
};

export const updateNote = async (user: User, note: Note) => {
  try {
    const updatedNote = await prisma.note.update({
      where: { id: note.id, AND: { userId: user.id } },
      data: {
        title: note.title,
        content: note.content,
        important: note.important,
        updatedAt: new Date(),
      },
    });
    return updatedNote;
  } catch (error) {
    console.error('Error updating note:', error);
    throw new Error('Could not update note');
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const deletedNote = await prisma.note.delete({
      where: { id: noteId },
    });
    return deletedNote;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw new Error('Could not delete note');
  }
};
