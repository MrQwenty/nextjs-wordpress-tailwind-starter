// import ClassName from 'models/classname';

// import styles from './Image.module.scss';

const Image = ({ children, width = '100%', height = 'auto', src, alt, srcSet, sizes, dangerouslySetInnerHTML }) => {
  // const imageClassName = new ClassName(styles.image);

  // imageClassName.addIf(className, className);

  return (
    <figure className="">
      <div className="">
        <img width={width} height={height} src={src} alt={alt || ''} srcSet={srcSet} sizes={sizes} />
      </div>
      {children && <figcaption>{children}</figcaption>}
      {dangerouslySetInnerHTML && (
        <figcaption
          dangerouslySetInnerHTML={{
            __html: dangerouslySetInnerHTML,
          }}
        />
      )}
    </figure>
  );
};

export default Image;
