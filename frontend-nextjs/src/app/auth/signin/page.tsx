import SignInForm from '@/components/auth/singin';
import Button from '@/components/ui/form/button';
import Center from '@/components/ui/layout/center';
import Container from '@/components/ui/layout/container';
import Stack from '@/components/ui/layout/stack';
import Heading from '@/components/ui/typography/heading';
import Text from '@/components/ui/typography/text';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  return (
    <Container
      className="max-w-screen-lg p-5 md:flex md:h-dvh md:justify-center md:rounded-none"
      centerContent
    >
      <Stack
        as={Center}
        className="gap-4 overflow-hidden rounded-3xl text-gray-400 md:flex-row md:gap-8"
      >
        <Image
          className="h-auto w-full rounded-l-3xl"
          src="/assets/images/auth/signin/signin-image.jpg"
          alt="signin-image"
          width={300}
          height={300}
        />
        <Stack as="form" className="gap-4">
          <Heading as="h1" className="text-gray-800">
            Welcome back!
          </Heading>
          <Text>
            Log in with your data that you interred during your registration.
          </Text>
          <SignInForm />
          <Center>
            <Text as="span">Don't have an account?</Text>
            &nbsp;
            <Button
              as={Link}
              className="self-center ps-0 pe-0 text-purple-400 active:text-purple-700"
              variant="link"
              href="/auth/signup"
            >
              Sign up
            </Button>
          </Center>
        </Stack>
      </Stack>
    </Container>
  );
}
