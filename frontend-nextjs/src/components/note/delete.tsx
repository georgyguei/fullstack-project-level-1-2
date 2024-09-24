import Button from '../ui/form/button';
import FormControl from '../ui/form/control';
import Input from '../ui/form/input';
import Link from 'next/link';
import Stack from '../ui/layout/stack';
import Flex from '../ui/layout/flex';
import { deleteNote } from '@/data-access/note';

type DeleteNoteProps = {
  noteId: string;
};

export default function DeleteNoteForm({ noteId }: DeleteNoteProps) {
  return (
    <Stack as="form" className="gap-4" method="DELETE" action={deleteNote}>
      <FormControl>
        <Input
          name="id"
          type="hidden"
          placeholder="Note title"
          defaultValue={noteId}
          variant="filled"
        />
      </FormControl>

      <Flex className="gap-3">
        <Button
          className="h-12 flex-1 self-end bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
          type="submit"
        >
          Yes
        </Button>
        <Button
          as={Link}
          className="h-12 flex-1 self-end bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
          href="/"
        >
          No
        </Button>
      </Flex>
    </Stack>
  );
}
