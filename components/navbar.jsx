import Link from "next/link"
const NavBar = () => {
    return (  
        <div>
            <h1> My First Application</h1>
            <Link href={"/"}>
            <a>Home</a>
            </Link>
            <Link href={"/about"}>
            <a>About</a>
            </Link>
            <Link href={"/ninja listing"}>
            <a>Ninja Listing</a>
            </Link>
        </div>
    );
}
 
export default NavBar;