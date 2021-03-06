import Link from "next/link";

export default function Navbar() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link href="/">
                                <a className="nav-link px-2 text-secondary">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="account">
                                <a className="nav-link px-2 text-white">Account</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="orders">
                                <a className="nav-link px-2 text-white">Orders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="cart">
                                <a className="nav-link px-2 text-white">Cart</a>
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <Link href="login">
                            <button type="button" className="btn btn-outline-light me-2">
                                Login
                            </button>
                        </Link>
                        <Link href="sign-up">
                            <button type="button" className="btn btn-warning">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
