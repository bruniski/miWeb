"use client";
import { useSession } from "next-auth/react";
import Login from "./Login";
import Page from "../homePage/Page";

const PageLogin = () => {
  const session = useSession();
  return <>{session.status === "unauthenticated" ? <Login /> : <Page />}</>;
};

export default PageLogin;
