import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Container from '../ui/layout/container';
import Flex from '../ui/layout/flex';
import Spacer from '../ui/layout/flex/spacer';
import Heading from '../ui/typography/heading';
import NavbarAccount from './account';
import Link from 'next/link';

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="h-20 bg-gray-100 ">
      <Container className="h-full max-w-screen-lg">
        <Flex as="nav" className="h-full items-center">
          <Heading as={Link} size="lg" href="/">
            Keep Notes
          </Heading>
          <Spacer />
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          <NavbarAccount user={user as any} />
        </Flex>
      </Container>
    </header>
  );
}
