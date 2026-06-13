import { Link } from 'react-router-dom';
import heroImage from '../assets/Cafe-PNG-Pic.png';
import "../style/Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Sweet Moments<br />Start Here!!</h1>

                <p>
                    Start your day with a perfect cup of coffee.
                    Fresh aroma and rich taste in every sip.
                </p>

                <Link to="/menu">
                    <button className="btn">Explore More!</button>
                </Link>
            </div>

            <div className="hero-right">
                <img src={heroImage} alt="hero" />
            </div>
        </section>
    );
}

export default Hero;