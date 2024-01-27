import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";
import { getTopInteractedTags } from "@/lib/actions/tags.action";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    image: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <article className="shadow-light100_darknone background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8 max-xs:min-w-full xs:w-[260px]">
      <Link
        href={`/profile/${user.clerkId}`}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src={user.image}
          alt="user profile picture"
          width={100}
          height={100}
          className="h-[100px] w-[100px] rounded-full object-cover"
        />

        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">{user.name}</h3>
          <p className="body-regular text-dark500_light500 mt-2">@{user.username}</p>
        </div>
      </Link>

      <div className="mt-5 max-w-[230px]">
        {interactedTags.length > 0 ? (
          <div className="flex items-center gap-2">
            {interactedTags.map((tag) => (
              <Tag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                showCount={false}
              />
            ))}
          </div>
        ) : (
          <Tag
            _id={"1"}
            name={"No tags yet"}
            showCount={false}
          />
        )}
      </div>
    </article>
  );
};

export default UserCard;
