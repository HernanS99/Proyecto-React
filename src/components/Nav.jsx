
import NavMax from "./NavMax"
import Footer from "./Footer"
const Nav = (props) => {
    return (
        <main>
            <NavMax />
            {props.children}
            <Footer/>
        </main>
    )
}

export default Nav