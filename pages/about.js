import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Head from "next/head";
import Intro from "../components/extraPageComponents/intro/intro";
import OurStory from "../components/aboutPageComponents/ourStory/ourStory";
import MeetTheTeam from "../components/aboutPageComponents/meetTheTeam/meetTheTeam";
import WhatWeDo from "../components/aboutPageComponents/whatWeDo/whatWeDo";
import styles from "../styles/Home.module.css";
import BeenUpTo from "../components/aboutPageComponents/beenUpTo/beenUpTo";
import BrandsAndPartners from "../components/aboutPageComponents/brandsAndPartners/brandsAndPartners";
import { navbarContentAction } from "../redux/navbar/navbar.actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const About = ({
  about,
  intro,
  cards,
  ourStory,
  meetTheTeam,
  whatWeDo,
  beenUpTo,
  brandsAndPartners,
  setNavbarColour,
}) => {

console.log(about)

  useEffect(() => {
    setNavbarColour(false);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>TruCSR - About Us</title>
      </Head>

      <main className={styles.main}>
        {/* {console.log(about)} */}
        <Intro
          title={
            intro?.primary?.heading && intro?.primary?.heading[0]
              ? intro.primary.heading[0].text
              : ""
          }
          content={
            intro.primary.text && intro.primary.text[0]
              ? intro.primary.text[0].text
              : ""
          }
          link={intro.primary.link_text ? intro.primary.link_text : ""}
          image1={
            intro.items && intro.items[0]
              ? intro.items[0].image.url
              : "/introAbout/image1.png"
          }
          image2={
            intro.items && intro.items[1]
              ? intro.items[1].image.url
              : "/introAbout/image1.png"
          }
          image3={
            intro.items && intro.items[2]
              ? intro.items[2].image.url
              : "/introAbout/image1.png"
          }
          href={
            intro.primary.link_address ? intro.primary.link_address.url : "/404"
          }
        />

        <OurStory
          title={
            ourStory.primary &&
            ourStory.primary.heading &&
            ourStory.primary.heading[0]
              ? ourStory.primary.heading[0].text
              : ""
          }
          content={
            ourStory.primary && ourStory.primary.sub_text
              ? ourStory.primary.sub_text
              : ""
          }
          image={
            ourStory.primary && ourStory.primary.image
              ? ourStory.primary.image.url
              : ""
          }
          content2={
            ourStory.primary &&
            ourStory.primary.member_role &&
            ourStory.primary.member_role[0]
              ? ourStory.primary.member_role[0].text
              : ""
          }
          title2={
            ourStory.primary &&
            ourStory.primary.member_name &&
            ourStory.primary.member_name[0]
              ? ourStory.primary.member_name[0].text
              : ""
          }
        />

        <MeetTheTeam
          title={
            meetTheTeam.primary &&
            meetTheTeam.primary.heading &&
            meetTheTeam.primary.heading[0]
              ? meetTheTeam.primary.heading[0].text
              : ""
          }
          items={meetTheTeam.items ? meetTheTeam.items : []}
        />

        <WhatWeDo
          heading={
            whatWeDo.primary &&
            whatWeDo.primary.heading &&
            whatWeDo.primary.heading[0]
              ? whatWeDo.primary.heading[0].text
              : ""
          }
          subHeading={
            whatWeDo.primary &&
            whatWeDo.primary["sub-heading"] &&
            whatWeDo.primary["sub-heading"][0]
              ? whatWeDo.primary["sub-heading"][0].text
              : ""
          }
          items={whatWeDo.items ? whatWeDo.items : []}
        />

        <BeenUpTo
          heading={
            beenUpTo.primary &&
            beenUpTo.primary.heading &&
            beenUpTo.primary.heading[0]
              ? beenUpTo.primary.heading[0].text
              : ""
          }
          subHeading={
            beenUpTo.primary &&
            beenUpTo.primary["sub-heading"] &&
            beenUpTo.primary["sub-heading"][0]
              ? beenUpTo.primary["sub-heading"][0].text
              : ""
          }
          items={cards ? cards : []}
        />

        <BrandsAndPartners
          heading={
            brandsAndPartners.top &&
            brandsAndPartners.top.primary &&
            brandsAndPartners.top.primary.heading &&
            brandsAndPartners.top.primary.heading[0]
              ? brandsAndPartners.top.primary.heading[0].text
              : ""
          }
          subHeading={
            brandsAndPartners.top &&
            brandsAndPartners.top.primary &&
            brandsAndPartners.top.primary["sub-heading"] &&
            brandsAndPartners.top.primary["sub-heading"][0]
              ? brandsAndPartners.top.primary["sub-heading"][0].text
              : ""
          }
          items1={brandsAndPartners.top ? brandsAndPartners.top.items : []}
          items2={
            brandsAndPartners.bottom ? brandsAndPartners.bottom.items : []
          }
          link={
            brandsAndPartners.bottom && brandsAndPartners.bottom.primary
              ? brandsAndPartners.bottom.primary.link_text
              : ""
          }
          href={
            brandsAndPartners.bottom &&
            brandsAndPartners.bottom.primary &&
            brandsAndPartners.bottom.primary.link_address
              ? brandsAndPartners.bottom.primary.link_address["url"]
              : "/404"
          }
        />
      </main>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setNavbarColour: (mode) => dispatch(navbarContentAction(mode)),
});
export default connect(null, mapDispatchToProps)(About);

export async function getServerSideProps() {
  let about = await Client().query(
    Prismic.Predicates.at("document.type", "about_page")
  );

  let about1 = {};

  about.results[0].data.body.map((each) => {
    return (about1[each.slice_type] = {
      items: each.items,
      primary: each.primary,
    });
  });
  about = about1;
  const posts = await Client().query(
    Prismic.Predicates.at("my.post.type", true),
    { pageSize: 6 }
  );
  let empty = {};
  posts.results.map((article) => {
    return (empty[`${article.uid}`] = { id: article.id, ...article.data });
  });
  // console.log(Object.values(empty))

  // console.table(about.card.primary)
  // console.log(about.heading___photos___text___link.items[0])
  // console.log(about.our_services2.primary)
  return {
    props: {
      about,
      intro: about.carousel,
      ourStory: about.heading___subtext,
      meetTheTeam: about.card,
      whatWeDo: about.our_services,
      beenUpTo: about.our_services1,
      cards: Object.values(empty),
      brandsAndPartners: {
        top: about.our_services2,
        bottom: about.heading___photos___text___link,
      },
    },
  };
}
