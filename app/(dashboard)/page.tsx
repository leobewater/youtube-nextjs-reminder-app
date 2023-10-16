import CreateCollectionBtn from '@/components/CreateCollectionBtn';
import SadFace from '@/components/icons/SadFace';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import prisma from '@/lib/prisma';
import { wait } from '@/lib/wait';
import { currentUser } from '@clerk/nextjs';
import { Suspense } from 'react';

const Home = async () => {
  return (
    <>
      {/* show loading */}
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionList />
      </Suspense>
    </>
  );
};
export default Home;

// by default this is server component
const WelcomeMsg = async () => {
  const user = await currentUser();
  //   await wait(3000); // simulate delay

  if (!user) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        Welcome, <br />
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

const WelcomeMsgFallback = () => {
  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[150px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
};

const CollectionList = async () => {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5 mt-4">
        <Alert>
          <SadFace />
          <AlertTitle>There are no collections yet!</AlertTitle>
          <AlertDescription>
            Create a collection to get started
          </AlertDescription>
        </Alert>
        <CreateCollectionBtn />
      </div>
    );
  }

  return (
    <div>
      Collections: {collections.length}
      <CreateCollectionBtn />
    </div>
  );
};
