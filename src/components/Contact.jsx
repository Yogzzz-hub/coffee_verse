import { useState } from "react";
import "../style/Contact.css";
import { FaPhone, FaGlobe, FaInstagram } from "react-icons/fa";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    

    

    const companyInfo = [
        {
            icon : <FaPhone/>,
            title:"Phone",
            value : 9876543210
        },

        {
            icon : <FaInstagram/>,
            title:"Instagram",
            value : "coffee_verse"
        },

        {
            icon : <FaGlobe/>,
            title: "Website",
            value : "www.coffeeverse.co.in"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(" Your message has been submitted successfully!!");

        setSubmitted(true);

        setName("")
        setEmail("")
        setMessage("")

        setTimeout(() => {

            setSubmitted(false);
            
        }, 3000);
    };


    return (
        <div className="contact-container">

            
            <div className="contact-customer">
                <h1>Contact Info</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type your name here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>

                    <input
                        type="email"
                        placeholder="Type your mail here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                     <br></br>
                    <textarea
                        placeholder="Type your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <br></br>
                    <button type="submit">Submit</button>

                    
                </form>
            </div>

            <div className="heading">
                <h2>Contact us on</h2>
            </div>
        
            
            <div className="company-details">
                
                {companyInfo.map((item,index) => (
                    
                    <div className="company-info" key={index}>
                        
                        <div className="icon">
                            {item.icon}
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.value}</p>

                    </div>
                )
                
                )}

            </div>

        </div>
    );
}

export default Contact;