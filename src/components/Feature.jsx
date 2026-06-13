import "../style/Feature.css";
import heroImage from '../assets/Cafe-PNG-Pic.png';

function Feature() {
    return (
        <section id="Feature">
            <div className = "feature-left">
                <img src={heroImage} alt="hero" />
            </div>

            <div className ="feature-right">
                <h2>MUI Coffee!!</h2>
                <p>Coffee is one of the most popular drinks in the world, loved for its rich aroma and energizing effect. It is made from roasted coffee beans and can be enjoyed in many ways, such as espresso, cappuccino, or iced coffee. Many people start their day with coffee because it helps them feel fresh and alert. Beyond being a drink, coffee is also a social experience, often shared during conversations, study sessions, or relaxing breaks.</p>
            </div>
        </section>

    );
}

export default Feature;