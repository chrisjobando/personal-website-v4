/** @format */

import { graphql, useStaticQuery } from 'gatsby';

export interface Metadata {
  url: string;
  title: string;
  description: string;
  titleTemplate: string;
}

interface Site {
  siteMetadata: Metadata;
}

interface LayoutQueryData {
  site: Site;
}

export const useLayoutQuery = (): LayoutQueryData => {
  const { site }: LayoutQueryData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          url
          title
          description
          titleTemplate
        }
      }
    }
  `);

  return { site };
};
