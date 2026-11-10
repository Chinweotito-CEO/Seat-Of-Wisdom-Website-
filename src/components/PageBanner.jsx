function PageBanner({ title, subtitle, image }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,50,0.55), rgba(20,20,50,0.55)), url(${image})`,
      }}
    >
      <div className="container">
        <h1 className="banner__title">{title}</h1>
        <span className="banner__line" aria-hidden="true"></span>
        {subtitle && <p className="banner__text">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
