import content from "@/content/footer-v1.json";
import styles from "./index.module.scss";

const Footer: React.FunctionComponent = () => {
  const { marketingBody, copyRight, linkCategories, socialIcons } =
    content.attributes;

  const socialSection = (
    <div className={styles.socialWrapper}>
      {socialIcons.map((icon, index) => (
        <img src={icon.src} alt={icon.altText} key={index} />
      ))}
    </div>
  );

  return (
    <>
      <div className={`row-container ${styles.container}`}>
        <div className="row">
          <div className={`${styles.logoWrapper} col-12`}>
            <img src="/assets/logos/logo.svg" alt="tinfoil hat logo" />
          </div>
        </div>
        <div className={`row ${styles.content}`}>
          <div
            className={`${styles.textAndSocial} col-6-lg col-12-md col-2-sm`}
          >
            <div className={styles.marketingBody}>{marketingBody}</div>
            <div className="desktop-and-up">{socialSection}</div>
          </div>
          <section
            className={`${styles.linksSection} col-6-lg col-12-md col-2-sm`}
          >
            {linkCategories.map((category, index) => (
              <div className={styles.linkCategoryBlock} key={index}>
                <h3 className="subheading3">{category.title}</h3>
                <div className={styles.categoryLinks}>
                  {category.links.map((link, index) => (
                    <a className={styles.link} href={link.href} key={index}>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <div className="tablet-and-down">{socialSection}</div>
        </div>
      </div>
      <div className={`${styles.copyRight} row-container`}>
        <div className="row">
          <div className="col-12">{copyRight}</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
