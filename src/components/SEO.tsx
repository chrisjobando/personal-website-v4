/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from '@reach/router';
import { Metadata } from '&hooks/useLayoutQuery';

export const SEO = ({ url, title, description, titleTemplate }: Metadata) => {
  const { pathname } = useLocation();

  const seo = {
    title: title || titleTemplate,
    description: description || undefined,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} meta={[{ name: 'description', content: seo.description }]}>
      <html lang="en" />
    </Helmet>
  );
};
