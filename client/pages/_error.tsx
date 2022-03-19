import { GetServerSideProps } from "next";

import { ErrorPage } from "@/lib/component/ErrorPage";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return {
    props: {
      statusCode: res.statusCode,
    },
  };
};

const ErrorMsg = (code: number) => {
  switch (true) {
    case code >= 500:
      return "Server is not working now";
    default:
    case code >= 400:
      return "Something wrong";
  }
};

const DefaultErrorPage = ({ statusCode }: { statusCode: number }) => {
  return <ErrorPage title="Error" msg={ErrorMsg(statusCode)} />;
};

export default DefaultErrorPage;
