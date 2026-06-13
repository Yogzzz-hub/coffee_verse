import founderImage from '../assets/about girl image.jpg';
import '../style/About.css';
const About = () => {
  return (

    <section className='about'>
      <div className = "about-image">
        <img src={founderImage} alt="founder" />;
      </div>

      <div className='about-content'>
        <h2> Meet our Founder - Sara!</h2>
        <p>Sara is the visionary founder behind Coffee Haven, a place where passion for coffee meets the art of creating memorable experiences. She holds a Ph.D. in Food Management, with years of research focused on food quality, customer satisfaction, and sustainable sourcing practices.During her academic journey, Sara traveled to various coffee-growing regions, studying how culture, craftsmanship, and quality ingredients come together to create the perfect cup. What began as a research interest soon grew into a lifelong passion.Inspired by the idea of bringing people together over great coffee, Sara founded Coffee Haven with a simple mission: to create a welcoming space where every cup tells a story and every customer feels at home.She carefully curated premium coffee beans, handcrafted recipes, and a cozy atmosphere that reflects her belief that coffee is more than just a beverage—it's an experience that connects people, sparks conversations, and creates lasting memories.Today, Coffee Haven continues to grow while staying true to Sara's vision of quality, innovation, and exceptional hospitality.</p>
      </div>
    </section>


  );
};

export default About;