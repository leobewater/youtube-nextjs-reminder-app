'use server';

import prisma from '@/lib/prisma';
import { createCollectionSchemaType } from '@/schema/createCollection';
import { currentUser } from '@clerk/nextjs';

// with server side actions you don't need to create an api endpoint like the old way

export async function createCollection(form: createCollectionSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error('user not found');
  }

  return await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
}
