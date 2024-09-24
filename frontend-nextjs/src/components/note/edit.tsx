import Button from '../ui/form/button';
import FormControl from '../ui/form/control';
import Input from '../ui/form/input';
import Textarea from '../ui/form/textarea';
import Checkbox from '../ui/form/checkbox';
import Stack from '../ui/layout/stack';
import { updateNote, type Note } from '@/data-access/note';

type EditNoteProps = {
  note: Note;
};

export default function EditNote({ note }: EditNoteProps) {
  return (
    <Stack as="form" className="gap-4" method="PUT" action={updateNote}>
      <FormControl>
        <Input name="id" type="hidden" defaultValue={note.id} />
      </FormControl>
      <FormControl>
        <Input
          name="title"
          type="text"
          required
          placeholder="Note title"
          defaultValue={note.title}
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <Textarea
          name="content"
          className="border-2 border-transparent bg-gray-100 hover:bg-gray-200 focus-visible:border-blue-500 focus-visible:bg-transparent"
          placeholder="Password"
          defaultValue={note.content}
          required
        />
      </FormControl>
      <FormControl>
        <Checkbox name="important" defaultChecked={note.important}>
          Is important
        </Checkbox>
      </FormControl>

      <Button
        className="h-12 self-end bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        type="submit"
      >
        Save
      </Button>
    </Stack>
  );
}
