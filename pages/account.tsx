import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Account() {
    return (
        <div className="container mt-3" style={{ minHeight: "75vh" }}>
            <h1 className="text-center">Account</h1>
        </div>
    );
}

Account.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
