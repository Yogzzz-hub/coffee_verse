import '../style/Menu.css';
import strongCoffee from '../assets/menu-coffee.jpeg';

function Menu() {

    const chocolateItems = [
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        },
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        },
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        },
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        },
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        },
        {
            image: strongCoffee,
            title: "Cappuccino",
            description: "Strong and rich coffee shot",
            price: "₹250"
        }
    ];

    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <p>Freshly brewed coffee and delightful treats.</p>

            <div className="menu-container">
                {chocolateItems.map((item, index) => (
                    <div className="menu-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <h4>{item.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;

