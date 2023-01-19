import { Header } from "../components/Header";
import EfficientCursor from "react-efficient-cursor";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import * as styles from "../styles/HomeStyles";

export default function Home() {
  return (
    <div className={styles.homeStylesContainer}>
      <EfficientCursor speed={0.3} className={styles.homeStylesEfficientCursor}>
        <div className={styles.homeStylesCursorIcon}></div>
      </EfficientCursor>

      <div className={styles.homeStylesComponentsContainer}>
        <Header />

        <Hero />

        <Projects />

        <Skills />

        <ContactForm />

        <Footer />
      </div>
    </div>
  );
}
