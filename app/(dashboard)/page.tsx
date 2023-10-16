import { Skeleton } from '@/components/ui/skeleton';
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
    <div className="flex w-full">
      <h1 className="text-4xl font-bold">
        Welcome, <br />
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

const WelcomeMsgFallback = () => {
  return (
    <div className="flex w-full">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[150px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
};
