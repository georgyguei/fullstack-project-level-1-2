'use client';

import Input from '../ui/form/input';

export default function SearchBar() {
  return (
    <Input
      className="md:max-w-[40ch]"
      placeholder="Search Notes"
      variant="filled"
    />
  );
}
