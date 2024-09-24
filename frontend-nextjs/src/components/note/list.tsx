import type { Note } from '@/data-access/note';
import Box from '../ui/layout/box';
import Flex from '../ui/layout/flex';
import NoteCard from './card';

type NoteListProps = {
  notes: Note[];
};

export default function NoteList({ notes }: NoteListProps) {
  return (
    <Flex className="flex-1 flex-wrap gap-5 overflow-auto">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </Flex>
  );
}
