import NoteList from '@/components/note/list';
import SearchBar from '@/components/searchbar';
import Button from '@/components/ui/form/button';
import Center from '@/components/ui/layout/center';
import Container from '@/components/ui/layout/container';
import Flex from '@/components/ui/layout/flex';
import Spacer from '@/components/ui/layout/flex/spacer';
import Heading from '@/components/ui/typography/heading';
import Text from '@/components/ui/typography/text';
import { getAllNotes } from '@/data-access/note';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

export default async function Home() {
  const notes = await getAllNotes();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main>
      <Container className="max-w-screen-lg ">
        <Flex className="h-[calc(100vh-(5rem+10rem))] flex-col space-y-5 rounded-xl p-3">
          <Flex className="flex-col gap-3 md:flex-row md:gap-0">
            <Heading>Hi, {user.given_name}</Heading>
            <Spacer />
            <SearchBar />
          </Flex>
          {notes && notes.length > 0 ? (
            <NoteList notes={notes} />
          ) : (
            <Center className="h-full flex-col">
              <Text className="text-center">There are no notes to show!</Text>
              <Button
                as={Link}
                className="text-blue-500 hover:underline active:text-blue-700"
                variant="link"
                href="/add-note"
              >
                Would you like to add one?
              </Button>
            </Center>
          )}
        </Flex>
      </Container>
    </main>
  );
}
