import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

// import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

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
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}