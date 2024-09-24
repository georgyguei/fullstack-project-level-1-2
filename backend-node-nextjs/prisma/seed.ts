import type { Prisma } from '@prisma/client';
import prisma from '../src/lib/prisma';

const initialTasks: Prisma.TaskCreateInput[] = [
  {
    title: 'Walk the dog',
    description: 'Go for a walk with the dog in the park',
    date: new Date().toISOString(),
    completed: false,
    tags: ['home', 'pet'],
  },
  {
    title: 'Buy groceries',
    description: 'Buy milk, bread, and eggs',
    date: new Date(),
    completed: false,
    tags: ['home', 'food'],
  },
  {
    title: 'Read a book',
    description: 'Read "The Pragmatic Programmer"',
    date: new Date(),
    completed: false,
    tags: ['hobby', 'reading'],
  },
];

async function main() {
  console.log('Start seeding ...');
  for (const task of initialTasks) {
    const newTask = await prisma.task.create({
      data: task,
    });
    console.log(`Created task with id: ${newTask.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
