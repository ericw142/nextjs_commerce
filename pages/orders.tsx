import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Orders() {
    return (
        <div>
            <h1 className="text-center">Orders</h1>
        </div>
    );
}

Orders.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
