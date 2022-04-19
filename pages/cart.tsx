import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Cart() {
    return (
        <div>
            <h1 className="text-center">Cart</h1>
        </div>
    );
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
