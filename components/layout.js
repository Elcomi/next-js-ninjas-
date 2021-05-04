import NavBar from "./navbar"
import Footer from "./footer"
const Layout = ({childern}) => {
    console.log("childern" , childern)
    return ( 
        <>
        <NavBar />
        {childern}
        <Footer />
        </>

     );
}
 
export default Layout;