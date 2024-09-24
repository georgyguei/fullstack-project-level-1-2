import Image from 'next/image';
import Box from '../ui/layout/box';
import Circle from '../ui/layout/center/circle';
import Flex from '../ui/layout/flex';
import Text from '../ui/typography/text';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/media/avatar';
import { use } from 'react';

type NavbarAccountProps = {
  user: {
    email: string;
    family_name: string;
    given_name: string;
    picture: string;
  };
};

export default function NavbarAccount({ user }: NavbarAccountProps) {
  return (
    <Flex className="items-center gap-4">
      <Box className="text-right">
        <Text className="text-sm">
          {user.given_name} {user.family_name}
        </Text>
        <Text className="text-xs">dev</Text>
      </Box>
      <Avatar className="size-12 bg-gray-300">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          {user.given_name[0].toUpperCase() + user.family_name[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </Flex>
  );
}
