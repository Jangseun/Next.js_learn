import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href = "/">Home</Link>
                <Link href = "/count">Counter</Link>
                <Link href = "/detail">Detail</Link>
            </nav>
        </>
    );
    
}
