/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from '@reach/router';
import { useMetadataQuery } from '&hooks/useMetadataQuery';
import { sitesitemetadata } from '&types/graphql';

export const SEO = ({ title, description }: sitesitemetadata) => {
  const { pathname } = useLocation();
  const { site } = useMetadataQuery();

  const seo: sitesitemetadata = {
    author: site?.siteMetadata?.author,
    title: title || site?.siteMetadata?.title,
    url: `${site?.siteMetadata?.url}${pathname}`,
    description: description || site?.siteMetadata?.description,
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
