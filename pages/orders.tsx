import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Orders() {
    return (
        <div className="container mt-3" style={{ minHeight: "75vh" }}>
            <h1 className="text-center">Orders</h1>
        </div>
    );
}

Orders.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
