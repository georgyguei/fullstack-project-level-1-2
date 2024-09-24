import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from 'react-icons/bi';
import Container from '@/components/ui/layout/container';
import Flex from '@/components/ui/layout/flex';
import Icon from '@/components/ui/media/icon';
import Heading from '@/components/ui/typography/heading';
import Text from '@/components/ui/typography/text';
import Stack from '@/components/ui/layout/stack';

export default function Footer() {
  return (
    <footer className="h-40 bg-gray-100 text-xs sm:text-sm md:text-md">
      <Container className="h-full max-w-screen-lg">
        <Flex as="nav" className="h-full items-center justify-between">
          <Heading size="lg">Keep Notes</Heading>
          <span className="text-center">
            <Text>Designed By GG</Text>
            <Text>© 2024 All rights reserved</Text>
          </span>
          <span>
            <Text className="capitalize">We are social</Text>
            <Stack as="ul" className="items-center" direction="row">
              <li>
                <Icon as={BiLogoYoutube} className="text-2xl" />
              </li>
              <li>
                <Icon as={BiLogoInstagramAlt} className="text-2xl" />
              </li>
              <li>
                <Icon as={BiLogoFacebookSquare} className="text-2xl" />
              </li>
            </Stack>
          </span>
        </Flex>
      </Container>
    </footer>
  );
}
