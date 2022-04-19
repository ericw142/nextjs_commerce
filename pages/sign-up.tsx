import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function SignUp() {
    return (
        <div className="container mt-3" style={{ minHeight: "75vh" }}>
            <h1 className="text-center">Sign Up</h1>

            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" />
                </div>
            </div>
        </div>
    );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
