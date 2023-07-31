import { Link } from "react-router-dom";
import './noFound.css';

const NotFound = () => {
    return ( 
        <section className="page_404">
            <div className="container">
                <h1 className="text-center">404</h1>
                <div className="four_zero_four_bg">
                </div>
                <div className="contant_box_404">
                    <h3 className="text-title">Look like you're lost</h3>
                    <p className="text-text">the page you are looking for not avaible!</p>
                <Link to="/"><button className="link_404">Go to Homepage</button></Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;