import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link px-2 text-muted">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="account">
                            <a className="nav-link px-2 text-muted">Account</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="orders">
                            <a className="nav-link px-2 text-muted">Orders</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="cart">
                            <a className="nav-link px-2 text-muted">Cart</a>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
