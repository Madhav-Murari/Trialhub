import React from "react";
import Link from 'next/link';

interface Props {
  linkTo?: string;
}

const LinkTo: React.FC<Props> = ({ linkTo = "" }) => {
  return (
    <div className="flex items-center text-xl md:text-base px-4 py-2 hover:text-[#FF725E]">
      <Link href={"/" + linkTo}>{linkTo.charAt(0).toUpperCase() + linkTo.slice(1)}</Link>
    </div>
  );
}

export default LinkTo;
