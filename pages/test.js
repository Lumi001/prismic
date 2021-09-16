import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Share from "../components/contentPageComponents/share/share";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import Card from "../components/extraPageComponents/card/card";
import { PRISMIC_heading, PRISMIC_image, PRISMIC_link, PRISMIC_link_text, PRISMIC_text, PRISMIC_title } from "../prismic-configuration";
import { useState } from "react";
import Button from "../components/extraPageComponents/button/button";
import ProjectCard from "../components/extraPageComponents/projectCard/projectCard";

const Content = ({ subpage, carousel, tabs }) => {
  const router = useRouter();
  const { id } = router.query;
  const [tab, setTab] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>TruCSR - Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          {/* <img src={PRISMIC_image(subpage.primary)}></img> */}
          <section className={styles.layout} style={{ flexWrap: "wrap" }}>
            <img src={PRISMIC_image(subpage.primary)} alt="page image" width={400} height={200} />
            <section className={styles.layout_right}>
              <h3>{PRISMIC_heading(subpage.primary)}</h3>
              {/* <h3>{title.text}</h3> */}
              <div>
                <ul style={{ display: "flex", listStyle:"none" }}>
                  {tabs.map((item) => {
                    return (
                      <li onClick={() => setTab(item.id)}>
                        <button style={{border:"none",padding:"10px 20px",background:"#C0C0C0",borderRadius:"4px",margin:"10px"}}>
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div>
                  {carousel[tab].items.map((item) => {
                    return (
                      //   <li onClick={() => setTab(item.id)}>{item.title}</li>
                      <ProjectCard
                        title={PRISMIC_heading(item)}
                        image={PRISMIC_image(item)}
                        content={PRISMIC_text(item)}
                        link_text={PRISMIC_link_text(item)}
                        href={PRISMIC_link(item)}
                        isNotShort={true}
                      />
                    );
                  })
                  }

                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Content;

export async function getServerSideProps(context) {
  const { title } = context.query;

  let subpage = await Client().query(
    Prismic.Predicates.at("my.test.uid", `${title}`)
  );
  console.log(subpage)
  // console.log("leggo")
  let carousel = subpage.results[0].data.body.filter(
    (item) => item.slice_type === "carousel"
  );
  let tabs = carousel.map((item, index) => {
    return { title: PRISMIC_title(item.primary), id: index };
  });
  return {
    props: {
      subpage: subpage.results[0]?.data.body[0],
      carousel: carousel,
      tabs,
    },
  };
}
