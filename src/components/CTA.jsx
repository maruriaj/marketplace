import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Why Sokoverse?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With over 10 years of combined experience, our mission is to develop with your values and vision in mind. We’re out to create purposeful software that balance strategy and creativity with science and Technology
        - Moses Kusasira, CEO at SokoVerse Group.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
