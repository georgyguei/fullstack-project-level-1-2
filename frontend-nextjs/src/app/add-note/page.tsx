import AddNoteForm from '@/components/note/new';
import Center from '@/components/ui/layout/center';
import Container from '@/components/ui/layout/container';
import Stack from '@/components/ui/layout/stack';
import Heading from '@/components/ui/typography/heading';
import Text from '@/components/ui/typography/text';

export default function AddNotePage() {
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
              Add New Note
            </Heading>
            <Text>Add a new note to your collection. to your note.</Text>
            <AddNoteForm />
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}
