import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import Attendance from "./components/Attendance/Attendance";
import Meeting from "./components/meeting/meeting";
import Worklog from "./components/worklog/worklog";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Meeting/>
    <Worklog/>
    // <Attendance/>
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
