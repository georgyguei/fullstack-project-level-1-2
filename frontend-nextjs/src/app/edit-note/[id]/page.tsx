import EditNoteForm from '@/components/note/edit';
import Center from '@/components/ui/layout/center';
import Container from '@/components/ui/layout/container';
import Stack from '@/components/ui/layout/stack';
import Heading from '@/components/ui/typography/heading';
import Text from '@/components/ui/typography/text';
import { getNoteById, type Note } from '@/data-access/note';
import { redirect } from 'next/navigation';

type UrlParams = {
  params: {
    id: string;
  };
  searchParams: object;
};
export default async function EditNotePage({ params }: UrlParams) {
  const note = await getNoteById(params.id);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  if (!note || (note as any).error) redirect('/');

  return (
    <main>
      <Container
        className="max-w-screen-lg md:flex md:justify-center md:rounded-none"
        centerContent
      >
        <Stack
          as={Center}
          className="h-[calc(100vh-(5rem+10rem))] gap-4 rounded-3xl text-gray-400 md:flex-row md:gap-8"
        >
          <Stack className="gap-4">
            <Heading as="h1" className="text-gray-800">
              Edit Note "
              <Text as="span" className="text-blue-500">
                {note.title}
              </Text>
              "
            </Heading>
            <Text>You can edit the title and content of the note here.</Text>
            <EditNoteForm note={note} />
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}
