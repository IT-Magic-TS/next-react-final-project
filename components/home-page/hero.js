import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Gate-web.webp"
          alt="Unique ornamental gats with scrolls"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Peter'</h1>
      <p>
        I blog about steelwork for housing market - especially for stairs,
        balustrades, gates, balconies.
      </p>
    </section>
  );
}

export default Hero;
