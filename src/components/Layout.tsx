/** @format */

import React, { ReactNode } from 'react';
import { Components, MDXProvider } from '@mdx-js/react';

import '&styles/global.sass';
import '&styles/layout.sass';

import { SEO } from '&components/SEO';
import { useLayoutQuery } from '&hooks/useLayoutQuery';

const components: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="Title" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="Tagline" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
  h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { site } = useLayoutQuery();
  const { url, title, description, titleTemplate } = site.siteMetadata;

  return (
    <MDXProvider components={components}>
      <SEO url={url} title={title} description={description} titleTemplate={titleTemplate} />
      <main>{children}</main>
    </MDXProvider>
  );
};

export default Layout;
