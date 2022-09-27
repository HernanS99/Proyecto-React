import Carousel from 'react-bootstrap/Carousel';
import Sushi from '../assets/img/sushi1.jpg'
import Front from '../assets/img/quiero.jpg'
import Food from '../assets/img/comida-china.jpg'

const Hero = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-5 p-5">
                    <h1 className='text-center fs-1 fw-bold'>Bienvenido</h1>
                    <h4 className='mt-5'>La mejor comida china a la puerta de tu casa</h4>
                </div>
                <div className="col-7 p-5">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    height=""
                                    src={Sushi}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src={Front}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src={Food}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero