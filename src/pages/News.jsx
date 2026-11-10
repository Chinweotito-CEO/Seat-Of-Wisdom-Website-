import { Link } from "react-router-dom";
import { Newspaper, ExternalLink } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import banners from "../data/Banner.js";
import { BLOG_URL, BLOG_NAME } from "../data/school.js";

// These match the blog's real sections. Add or delete to match the blog.
const topics = [
  { label: "News", path: "/category/news" },
  { label: "Events", path: "/category/events" },
  { label: "Academics", path: "/category/academics" },
  { label: "Sports", path: "/category/sports" },
  { label: "Arts & Culture", path: "/category/arts-culture" },
];

function News() {
  return (
    <>
      <PageBanner
        title="News & Events"
        subtitle="Stay up to date with life at Seat of Wisdom."
        image={banners.news}
      />

      <section className="section news">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Latest From Seat of Wisdom</p>
            <h2 className="section-title">School news, events and updates</h2>
            <p className="news__lead">
              {/* DRAFT: the school must approve this wording */}
              Our latest stories, events and photos are shared on {BLOG_NAME},
              the blog of our student press club.
            </p>
          </div>

          <div className="news-feature">
            <span className="icon-circle">
              <Newspaper size={26} aria-hidden="true" />
            </span>

            {BLOG_URL ? (
              <>
                <h3>Read {BLOG_NAME}</h3>
                <p>
                  Find the full stories, photos and updates from around the
                  school.
                </p>
                <a
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apply btn-apply--icon"
                >
                  Visit the blog
                  <ExternalLink size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </>
            ) : (
              <>
                <h3>Our news is coming soon</h3>
                <p>
                  Please contact the school if you would like to hear about what
                  is happening.
                </p>
                <Link to="/contact" className="btn-apply">
                  Contact the School
                </Link>
              </>
            )}
          </div>

          {BLOG_URL && (
            <>
              <ul className="news-topics" aria-label="Sections of the blog">
                {topics.map((t) => (
                  <li key={t.label}>
                    <a
                      href={`${BLOG_URL}${t.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="news__note">
                These links open the blog in a new tab.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Have a question? We would love to hear from you</h2>
          <Link to="/contact" className="btn-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default News;
