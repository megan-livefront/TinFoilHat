import content from "@/content/scrolling-categories-v1.json";
import styles from "./index.module.scss";

const ScrollingCategoriesBar: React.FunctionComponent = () => {
  const { categories } = content.attributes;

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {categories.map((category, index) => (
          <div className={styles.slide} key={index}>
            <img src={category.icon} alt="" />
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCategoriesBar;
