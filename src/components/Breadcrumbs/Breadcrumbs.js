import Link from 'next/link';

// import ClassName from 'models/classname';

// import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
  // const breadcrumbsClassName = new ClassName(styles.breadcrumbs);

  // breadcrumbsClassName.addIf(className, className);

  return (
    <ul className="">
      {breadcrumbs.map(({ id, title, uri }) => {
        return (
          <li key={id}>
            {!uri && title}
            {uri && (
              <Link href={uri}>
                <a>{title}</a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
