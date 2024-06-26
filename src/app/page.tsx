import styles from './globals.css';

export default function Home() {
  return (
    <div className="HeroSection">
      <div className="Text">
        <div className="HeroText">Gemeinschaftliche Gebäudeversorgung, <span className="highlight">but in easy!</span></div>
        <div className="HeroText-small">Our Vision is, that everyone can profit from the energy transation. Let us change the future together and join the energy revolution now.</div>
        <div className="primaryButton">Book a free consultation now</div>
      </div>
      <div className="Image">
      <img src="/images/Hero-Image.png" alt="Hero Image" />
      </div>
    </div>
  );
}

