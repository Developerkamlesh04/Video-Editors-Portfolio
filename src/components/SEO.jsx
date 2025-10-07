import React from "react";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants";

export default function SEO({ title, description, keywords }) {
  const fullTitle = title
    ? `${title} | ${constants.SITE_NAME}`
    : constants.SITE_NAME;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description || constants.SITE_DESCRIPTION}
      />
      <meta name="keywords" content={keywords || constants.SITE_KEYWORDS} />
      <meta name="author" content={constants.SITE_AUTHOR} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || constants.SITE_DESCRIPTION}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/images/showreel-poster.jpg" />
    </Helmet>
  );
}
