import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoRouteKey, seoByRoute } from '../data/seo';

interface SeoHeadProps {
  route: SeoRouteKey;
}

const SeoHead: React.FC<SeoHeadProps> = ({ route }) => {
  const seo = seoByRoute[route];

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta name="robots" content={seo.robots} />

      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:site_name" content="Motion Agency" />

      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
    </Helmet>
  );
};

export default SeoHead;
