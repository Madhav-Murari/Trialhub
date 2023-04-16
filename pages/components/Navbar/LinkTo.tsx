import React from "react";
import Link from 'next/link';

interface Props {
  linkTo?: string;
}

const LinkTo: React.FC<Props> = ({ linkTo = "" }) => {
  return (
    <div className="flex items-center border-black hover:border-b-2 py-5 text-xl md:text-base md:p-1">
      <Link href={"/" + linkTo}>{linkTo.charAt(0).toUpperCase() + linkTo.slice(1)}</Link>
    </div>
  );
}

export default LinkTo;
