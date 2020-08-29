/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Frontmatter } from '&components/Layout';

import { useLocation } from '@reach/router';
import { useMetadataQuery } from '&hooks/useMetadataQuery';

export const SEO = ({ title, description }: Frontmatter) => {
  const { pathname } = useLocation();
  const { site } = useMetadataQuery();

  const seo = {
    author: site.siteMetadata.author,
    title: title || site.siteMetadata.title,
    url: `${site.siteMetadata.url}${pathname}`,
    description: description || site.siteMetadata.description,
  };

  return (
    <Helmet
      title={seo.title}
      meta={[
        { name: 'author', content: seo.author },
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og: url', content: seo.url },
      ]}
    >
      <html lang="en" />
    </Helmet>
  );
};
