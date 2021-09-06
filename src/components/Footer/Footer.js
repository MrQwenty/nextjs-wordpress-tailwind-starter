import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';

// import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <footer className="">
      {hasMenu && (
        <Section className="">
          <Container>
            <ul className="">
              {hasRecentPosts && (
                <li>
                  <Link href="/posts/">
                    <a className="">
                      <strong>Recent Posts</strong>
                    </a>
                  </Link>
                  <ul className="">
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              {hasRecentCategories && (
                <li>
                  <Link href="/categories/">
                    <a className="">
                      <strong>Categories</strong>
                    </a>
                  </Link>
                  <ul className="">
                    {categories.map((category) => {
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Link href={categoryPathBySlug(slug)}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              <li>
                <p className="">
                  <strong>More</strong>
                </p>
                <ul className="">
                  <li>
                    <Link href="/feed.xml">
                      <a>RSS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">
                      <a>Sitemap</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Container>
        </Section>
      )}

      <Section className="">
        <Container>
          <p>
            &copy; {new Date().getFullYear()} {title}
          </p>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
