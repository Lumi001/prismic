import Prismic from 'prismic-javascript';
import { Client } from '../../prismic-configuration';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Share from '../../components/contentPageComponents/share/share';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-reactjs';

const Content = ({ title, image, content }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - Publication</title>

            </Head>

            <main className={styles.main}>
                <div className={styles.content}>
                    <img src={image.url}></img>
                    <section className={styles.layout_case_study}>
                            <RichText render={title} />
                            {/* <h3>{title.text}</h3> */}
                            <div>
                            <RichText render={content} />
                            </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Content;

export async function getServerSideProps(context) {
    const { id } = context.params
    // console.log("leggo")
    let post = await Client().query(
        Prismic.Predicates.at("document.id", `${id}`)
    )

    let post1 = {}
    // console.log("post", post.results[0].data, "post")

    let body = post.results[0].data; 
    // console.log("post", body.title[0], "post")
    // post = post1;

    // console.table(services.card.primary)
    // console.log(services.heading___photos___text___link.items[0])
    // console.log(services.our_services2.primary)
    return {
        props: {
            image: body.post_image || body.article_image || "",
            title: body.title || "",
            content: body.post_content || body.article_content || ""
        }
    } 
}