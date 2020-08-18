/** @format */

import React, { ReactNode } from 'react';
import { Components, MDXProvider } from '@mdx-js/react';

import '&styles/global.sass';
import '&styles/layout.sass';

const components: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="Title" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  h5: ({ children, ...props }) => (
    <h5 className="Tagline" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
};

const Layout = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>
    <main>{children}</main>
  </MDXProvider>
);

export default Layout;
