import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Cart() {
    return (
        <div className="container mt-3" style={{ minHeight: "75vh" }}>
            <h1 className="text-center">Cart</h1>
        </div>
    );
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
