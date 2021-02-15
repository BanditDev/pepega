import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CommunityCard: React.FC<{ title: string; name: string }> = ({
  title,
  name,
}) => {
  return (
    <Link href={`/${name}`}>
      <div className="flex flex-col flex-shrink-0 overflow-hidden items-center justify-center  cursor-pointer hover:opacity-90 bg-surface m-4 rounded">
        {/* <div className="rounded-full bg-background h-32px w-32px flex items-center justify-center justify-items-start">
          <span className="text-gray-400 text-sm">{name}</span>
        </div> */}
        <div className="w-full bg-surface-light py-12"></div>
        <div className="w-full px-4 py-2">
          <span className="text-sm text-text">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export const MainCommunities = () => {
  const router = useRouter();
  const isUser = true;

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-end px-4 py-2 bg-surface">
        <Link
          as={isUser ? `/newCommunity` : `/auth?continue=/newCommunity`}
          href={{
            pathname: router.route,
            query: {
              ...router.query,
              [isUser ? 'newCommunity' : 'authModal']: 1,
            },
          }}
          passHref
        >
          <button className="btn-primary">Create community</button>
        </Link>
      </div>

      <div className="flex flex-1 w-full overflow-hidden my-4">
        <div className="w-full grid grid-cols-fill-240px auto-rows-max gap-2 justify-center overflow-y-auto">
          {[...Array(100).keys()].map((k) => (
            <CommunityCard
              key={k}
              name={`community-${k}`}
              title={`Community ${k}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};