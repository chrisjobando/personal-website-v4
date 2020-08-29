/** @format */

import { graphql, useStaticQuery } from 'gatsby';
import { GetSiteMetadataQuery } from '../../types/typings/graphql';

export const useMetadataQuery = (): GetSiteMetadataQuery => {
  const { site } = useStaticQuery<GetSiteMetadataQuery>(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          url
          title
          author
          description
        }
      }
    }
  `);

  return { site };
};
