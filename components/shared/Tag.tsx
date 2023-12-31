import Link from "next/link";
import { Badge } from "../ui/badge";

type props = {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount: boolean;
};
const Tag = ({ _id, name, totalQuestions, showCount }: props) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex justify-between gap-2"
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && <span className="small-medium text-dark500_light700">{totalQuestions}</span>}
    </Link>
  );
};

export default Tag;
