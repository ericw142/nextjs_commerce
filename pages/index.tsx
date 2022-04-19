import type { NextPage } from "next";
import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Page() {
    return (
        <div className="container">
            <h1 className="text-center">Hello Nextjs Commerce</h1>
        </div>
    );
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
