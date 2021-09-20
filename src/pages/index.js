import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { getPageByUri } from 'lib/pages';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

// import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, pagination, introduction }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;
  const { header, subHeader } = introduction;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1
          className=""
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <p
          className=""
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Header>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      /> */}

      <div>{header}</div>
      <div>{subHeader}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: introduction.oEmbed.html,
        }}
      />
      <Section>
        <Container>
          <h2 className="">Posts</h2>
          <ul className="">
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}
export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  let pageUri = '/';
  const { page } = await getPageByUri(pageUri);

  let oEmbed;

  if (page?.introduction?.videoUrl) {
    oEmbed = await fetch(`https://www.youtube.com/oembed?url=${page.introduction.videoUrl}`);
    oEmbed = await oEmbed.json();
  }
  // console.log(page);
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
      introduction: {
        ...page.introduction,
        oEmbed,
      },
    },
  };
}
