'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  important?: boolean;
};

async function iSUserAuthenticated() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }
}

export async function getAllNotes() {
  await iSUserAuthenticated();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const response = await fetch('http://localhost:3001/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id,
        email: user.email,
      }),
    });

    const data = await response.json();
    return data as Note[];
  } catch (error) {
    console.log(error);
  }
}

export async function getNoteById(id: string) {
  await iSUserAuthenticated();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const response = await fetch(`http://localhost:3001/note/${id}`);

    const data = await response.json();
    return data as Note;
  } catch (error) {
    console.log(error);
  }
}

export async function addNote(params: FormData) {
  await iSUserAuthenticated();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const note: Partial<Note> = {
      content: params.get('content') as string,
      title: params.get('title') as string,
      important: (params.get('important') as string) === 'on',
    };

    const response = await fetch('http://localhost:3001/note/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        note,
      }),
    });

    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateNote(params: FormData) {
  await iSUserAuthenticated();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const note: Partial<Note> = {
      id: params.get('id') as string,
      content: params.get('content') as string,
      title: params.get('title') as string,
      important: (params.get('important') as string) === 'on',
    };

    const response = await fetch('http://localhost:3001/note/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        note,
      }),
    });

    const data = await response.json();
    redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNote(params: FormData) {
  await iSUserAuthenticated();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const note: Partial<Note> = {
      id: params.get('id') as string,
    };

    const response = await fetch('http://localhost:3001/note/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        note,
      }),
    });

    const data = await response.json();
    redirect('/');
  } catch (error) {
    console.log(error);
  }
}
