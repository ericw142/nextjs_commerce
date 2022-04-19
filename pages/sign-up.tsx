import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function SignUp() {
    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
        </div>
    );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
