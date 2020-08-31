/** @format */

import React, { ReactNode } from 'react';

import '&styles/global.sass';
import '&styles/layout.sass';

import { Navbar } from '&components/Navbar';
import { SEO } from '&components/SEO';

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
