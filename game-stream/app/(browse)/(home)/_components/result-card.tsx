import Link from "next/link";
import { Stream, User } from "@prisma/client";

import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { LiveBadge } from "@/components/live-badge";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultCardProps {
    data: { 
        user: User,
        isLive: boolean;
        name: string,
        thumbnailUrl: string | null;
    };
};

export const ResultCard = ({
    data,
}: ResultCardProps) => {
    return (
        <Link href={`/${data.user.username}`}>
          <div className="h-full w-full space-y-4">
            <Thumbnail
              src={data.thumbnailUrl}
              fallback={data.user.imageUrl}
              isLive={data.isLive}
              username={data.user.username}
            />
            {/* {data.isLive && (
                <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                    <LiveBadge />
                </div>
            )} */}
            <div className="flex gap-x-3">
                <UserAvatar 
                  username={data.user.username}
                  imageUrl={data.user.imageUrl}
                  isLive={data.isLive}
                  size="md" // I added this
                />
                <div className="flex flex-col text-sm overflow-hidden">
                    <p className="truncate font-semibold hover:text-blue-500">
                        {data.name}
                    </p>
                    <p className="text-muted-foreground">
                        {data.user.username}
                    </p>
                </div>
            </div>
          </div>
        </Link>
    );
};

export const ResultCardSkeleton = () => {
    return(
        <div className="h-full w-full space-y-4">
            <ThumbnailSkeleton />
            <div className="flex gap-x-3">
                <UserAvatarSkeleton />
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-32"/>
                    <Skeleton className="h-3 w-24" />
                </div>
            </div>
        </div>
    );
};