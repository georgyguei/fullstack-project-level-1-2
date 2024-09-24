import type { Note } from '@/data-access/note';
import Box from '../ui/layout/box';
import Flex from '../ui/layout/flex';
import Spacer from '../ui/layout/flex/spacer';
import Stack from '../ui/layout/stack';
import Heading from '../ui/typography/heading';
import Text from '../ui/typography/text';
import Link from 'next/link';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import Button from '../ui/form/button';
import Icon from '../ui/media/icon';

export default function NoteCard({ note }: { note: Note }) {
  return (
    <Stack className="h-fit w-full gap-5 rounded-md bg-gray-100 p-5 text-gray-500 md:max-w-[35%]">
      <Flex className="text-sm">
        <Text>Note {note.id}</Text>
        <Spacer />
        {note.important ? (
          <Text
            as="span"
            className="h-fit rounded-sm bg-blue-500 p-0.5 text-white text-xs"
          >
            Important
          </Text>
        ) : null}
      </Flex>
      <Box>
        <Heading size="lg" className=" text-gray-700">
          {note.title}
        </Heading>
        <Text className="no-of-lines-5 text-justify">{note.content}</Text>
      </Box>
      <Flex className="items-center">
        <Text className="text-sm">{note.createdAt}</Text>
        <Spacer />
        <Box>
          <Box className="space-x-2">
            <Button
              as={Link}
              size="xs"
              className="rounded-full bg-red-500 ps-0 pe-0 text-white hover:bg-red-600 active:bg-red-700"
              href={`/delete-note/${note.id}`}
            >
              <Icon as={BiTrash} className="text-lg" />
            </Button>
            <Button
              as={Link}
              size="xs"
              className="rounded-full bg-blue-500 ps-0 pe-0 text-white hover:bg-blue-600 active:bg-blue-700"
              href={`/edit-note/${note.id}`}
            >
              <Icon as={BiEditAlt} className="text-lg" />
            </Button>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
