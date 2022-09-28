import Hero from "../components/Hero"
import Catalogue from "../components/Catalogue"
import Aboutus from "../components/Aboutus"
import Contact from "../components/Contact"

const Home = () => {
    return(
        <div>
            <Hero />
        |   <Catalogue />
            <Aboutus />
            <Contact />
        </div>
    )
}

export default Home