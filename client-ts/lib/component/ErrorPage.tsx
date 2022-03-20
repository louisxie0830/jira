import { FC, ReactNode } from "react";


export const ErrorPage: FC<{
  msg: string;
  title: string;
  rightArea?: ReactNode;
}> = ({ msg, title, rightArea }) => {
  console.log('rightArea: ', rightArea);
  console.log('title: ', title);
  console.log('msg: ', msg);
  return (
    <div>error page</div>
  );
};
