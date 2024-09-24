import Button from '../ui/form/button';
import FormControl from '../ui/form/control';
import Input from '../ui/form/input';
import Textarea from '../ui/form/textarea';
import Checkbox from '../ui/form/checkbox';
import Stack from '../ui/layout/stack';
import { addNote } from '@/data-access/note';

export default function AddNoteForm() {
  return (
    <Stack as="form" className="gap-4" method="POST" action={addNote}>
      <FormControl>
        <Input
          name="title"
          type="text"
          placeholder="Note title"
          required
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <Textarea
          name="content"
          className="border-2 border-transparent bg-gray-100 hover:bg-gray-200 focus-visible:border-blue-500 focus-visible:bg-transparent"
          placeholder="Password"
          required
        />
      </FormControl>
      <FormControl>
        <Checkbox name="important">Is important</Checkbox>
      </FormControl>

      <Button
        className="h-12 self-end bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        type="submit"
      >
        Add note
      </Button>
    </Stack>
  );
}
