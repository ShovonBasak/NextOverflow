import { getAllUsers } from "@/lib/actions/user.action";
import UserCard from "./UserCard";
import Link from "next/link";

const UserList = async () => {
  const users = await getAllUsers();

  return (
    <section className="mt-12 flex flex-wrap items-start gap-4">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
          />
        ))
      ) : (
        <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
          <p>No users yet</p>
          <Link
            href="/sign-up"
            className="mt-2 font-bold text-accent-blue"
          >
            Join to be the first!
          </Link>
        </div>
      )}
    </section>
  );
};

export default UserList;
