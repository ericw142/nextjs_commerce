import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Login() {
    return (
        <div>
            <h1 className="text-center">Login</h1>
        </div>
    );
}

Login.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
