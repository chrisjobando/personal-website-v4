/** @format */

export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type booleanqueryoperatorinput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type datequeryoperatorinput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type directory = node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type directorymodifiedtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directoryaccesstimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directorychangetimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directorybirthtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directoryatimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directorymtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directoryctimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type directoryconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<directoryedge>;
  readonly nodes: ReadonlyArray<directory>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<directorygroupconnection>;
};

export type directoryconnectiondistinctargs = {
  field: directoryfieldsenum;
};

export type directoryconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: directoryfieldsenum;
};

export type directoryedge = {
  readonly next?: Maybe<directory>;
  readonly node: directory;
  readonly previous?: Maybe<directory>;
};

export type directoryfieldsenum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type directoryfilterinput = {
  readonly sourceInstanceName?: Maybe<stringqueryoperatorinput>;
  readonly absolutePath?: Maybe<stringqueryoperatorinput>;
  readonly relativePath?: Maybe<stringqueryoperatorinput>;
  readonly extension?: Maybe<stringqueryoperatorinput>;
  readonly size?: Maybe<intqueryoperatorinput>;
  readonly prettySize?: Maybe<stringqueryoperatorinput>;
  readonly modifiedTime?: Maybe<datequeryoperatorinput>;
  readonly accessTime?: Maybe<datequeryoperatorinput>;
  readonly changeTime?: Maybe<datequeryoperatorinput>;
  readonly birthTime?: Maybe<datequeryoperatorinput>;
  readonly root?: Maybe<stringqueryoperatorinput>;
  readonly dir?: Maybe<stringqueryoperatorinput>;
  readonly base?: Maybe<stringqueryoperatorinput>;
  readonly ext?: Maybe<stringqueryoperatorinput>;
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly relativeDirectory?: Maybe<stringqueryoperatorinput>;
  readonly dev?: Maybe<intqueryoperatorinput>;
  readonly mode?: Maybe<intqueryoperatorinput>;
  readonly nlink?: Maybe<intqueryoperatorinput>;
  readonly uid?: Maybe<intqueryoperatorinput>;
  readonly gid?: Maybe<intqueryoperatorinput>;
  readonly rdev?: Maybe<intqueryoperatorinput>;
  readonly ino?: Maybe<floatqueryoperatorinput>;
  readonly atimeMs?: Maybe<floatqueryoperatorinput>;
  readonly mtimeMs?: Maybe<floatqueryoperatorinput>;
  readonly ctimeMs?: Maybe<floatqueryoperatorinput>;
  readonly atime?: Maybe<datequeryoperatorinput>;
  readonly mtime?: Maybe<datequeryoperatorinput>;
  readonly ctime?: Maybe<datequeryoperatorinput>;
  readonly birthtime?: Maybe<datequeryoperatorinput>;
  readonly birthtimeMs?: Maybe<floatqueryoperatorinput>;
  readonly blksize?: Maybe<intqueryoperatorinput>;
  readonly blocks?: Maybe<intqueryoperatorinput>;
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type directorygroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<directoryedge>;
  readonly nodes: ReadonlyArray<directory>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type directorysortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<directoryfieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type duotonegradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type file = node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly childImageSharp?: Maybe<imagesharp>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type filemodifiedtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type fileaccesstimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type filechangetimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type filebirthtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type fileatimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type filemtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type filectimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type fileconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<fileedge>;
  readonly nodes: ReadonlyArray<file>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<filegroupconnection>;
};

export type fileconnectiondistinctargs = {
  field: filefieldsenum;
};

export type fileconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: filefieldsenum;
};

export type fileedge = {
  readonly next?: Maybe<file>;
  readonly node: file;
  readonly previous?: Maybe<file>;
};

export type filefieldsenum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type filefilterinput = {
  readonly sourceInstanceName?: Maybe<stringqueryoperatorinput>;
  readonly absolutePath?: Maybe<stringqueryoperatorinput>;
  readonly relativePath?: Maybe<stringqueryoperatorinput>;
  readonly extension?: Maybe<stringqueryoperatorinput>;
  readonly size?: Maybe<intqueryoperatorinput>;
  readonly prettySize?: Maybe<stringqueryoperatorinput>;
  readonly modifiedTime?: Maybe<datequeryoperatorinput>;
  readonly accessTime?: Maybe<datequeryoperatorinput>;
  readonly changeTime?: Maybe<datequeryoperatorinput>;
  readonly birthTime?: Maybe<datequeryoperatorinput>;
  readonly root?: Maybe<stringqueryoperatorinput>;
  readonly dir?: Maybe<stringqueryoperatorinput>;
  readonly base?: Maybe<stringqueryoperatorinput>;
  readonly ext?: Maybe<stringqueryoperatorinput>;
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly relativeDirectory?: Maybe<stringqueryoperatorinput>;
  readonly dev?: Maybe<intqueryoperatorinput>;
  readonly mode?: Maybe<intqueryoperatorinput>;
  readonly nlink?: Maybe<intqueryoperatorinput>;
  readonly uid?: Maybe<intqueryoperatorinput>;
  readonly gid?: Maybe<intqueryoperatorinput>;
  readonly rdev?: Maybe<intqueryoperatorinput>;
  readonly ino?: Maybe<floatqueryoperatorinput>;
  readonly atimeMs?: Maybe<floatqueryoperatorinput>;
  readonly mtimeMs?: Maybe<floatqueryoperatorinput>;
  readonly ctimeMs?: Maybe<floatqueryoperatorinput>;
  readonly atime?: Maybe<datequeryoperatorinput>;
  readonly mtime?: Maybe<datequeryoperatorinput>;
  readonly ctime?: Maybe<datequeryoperatorinput>;
  readonly birthtime?: Maybe<datequeryoperatorinput>;
  readonly birthtimeMs?: Maybe<floatqueryoperatorinput>;
  readonly blksize?: Maybe<intqueryoperatorinput>;
  readonly blocks?: Maybe<intqueryoperatorinput>;
  readonly publicURL?: Maybe<stringqueryoperatorinput>;
  readonly childImageSharp?: Maybe<imagesharpfilterinput>;
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type filegroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<fileedge>;
  readonly nodes: ReadonlyArray<file>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type filesortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<filefieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type floatqueryoperatorinput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export type imagecropfocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type imagefit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type imageformat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP';

export type imagesharp = node & {
  readonly fixed?: Maybe<imagesharpfixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions?: Maybe<imagesharpresolutions>;
  readonly fluid?: Maybe<imagesharpfluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes?: Maybe<imagesharpsizes>;
  readonly original?: Maybe<imagesharporiginal>;
  readonly resize?: Maybe<imagesharpresize>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type imagesharpfixedargs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<duotonegradient>;
  traceSVG: Maybe<potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<imageformat>;
  toFormatBase64?: Maybe<imageformat>;
  cropFocus?: Maybe<imagecropfocus>;
  fit?: Maybe<imagefit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type imagesharpresolutionsargs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<duotonegradient>;
  traceSVG: Maybe<potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<imageformat>;
  toFormatBase64?: Maybe<imageformat>;
  cropFocus?: Maybe<imagecropfocus>;
  fit?: Maybe<imagefit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type imagesharpfluidargs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<duotonegradient>;
  traceSVG: Maybe<potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<imageformat>;
  toFormatBase64?: Maybe<imageformat>;
  cropFocus?: Maybe<imagecropfocus>;
  fit?: Maybe<imagefit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type imagesharpsizesargs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<duotonegradient>;
  traceSVG: Maybe<potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<imageformat>;
  toFormatBase64?: Maybe<imageformat>;
  cropFocus?: Maybe<imagecropfocus>;
  fit?: Maybe<imagefit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type imagesharpresizeargs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<duotonegradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<potrace>;
  toFormat?: Maybe<imageformat>;
  cropFocus?: Maybe<imagecropfocus>;
  fit?: Maybe<imagefit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type imagesharpconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<imagesharpedge>;
  readonly nodes: ReadonlyArray<imagesharp>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<imagesharpgroupconnection>;
};

export type imagesharpconnectiondistinctargs = {
  field: imagesharpfieldsenum;
};

export type imagesharpconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: imagesharpfieldsenum;
};

export type imagesharpedge = {
  readonly next?: Maybe<imagesharp>;
  readonly node: imagesharp;
  readonly previous?: Maybe<imagesharp>;
};

export type imagesharpfieldsenum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type imagesharpfilterinput = {
  readonly fixed?: Maybe<imagesharpfixedfilterinput>;
  readonly resolutions?: Maybe<imagesharpresolutionsfilterinput>;
  readonly fluid?: Maybe<imagesharpfluidfilterinput>;
  readonly sizes?: Maybe<imagesharpsizesfilterinput>;
  readonly original?: Maybe<imagesharporiginalfilterinput>;
  readonly resize?: Maybe<imagesharpresizefilterinput>;
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type imagesharpfixed = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type imagesharpfixedfilterinput = {
  readonly base64?: Maybe<stringqueryoperatorinput>;
  readonly tracedSVG?: Maybe<stringqueryoperatorinput>;
  readonly aspectRatio?: Maybe<floatqueryoperatorinput>;
  readonly width?: Maybe<floatqueryoperatorinput>;
  readonly height?: Maybe<floatqueryoperatorinput>;
  readonly src?: Maybe<stringqueryoperatorinput>;
  readonly srcSet?: Maybe<stringqueryoperatorinput>;
  readonly srcWebp?: Maybe<stringqueryoperatorinput>;
  readonly srcSetWebp?: Maybe<stringqueryoperatorinput>;
  readonly originalName?: Maybe<stringqueryoperatorinput>;
};

export type imagesharpfluid = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type imagesharpfluidfilterinput = {
  readonly base64?: Maybe<stringqueryoperatorinput>;
  readonly tracedSVG?: Maybe<stringqueryoperatorinput>;
  readonly aspectRatio?: Maybe<floatqueryoperatorinput>;
  readonly src?: Maybe<stringqueryoperatorinput>;
  readonly srcSet?: Maybe<stringqueryoperatorinput>;
  readonly srcWebp?: Maybe<stringqueryoperatorinput>;
  readonly srcSetWebp?: Maybe<stringqueryoperatorinput>;
  readonly sizes?: Maybe<stringqueryoperatorinput>;
  readonly originalImg?: Maybe<stringqueryoperatorinput>;
  readonly originalName?: Maybe<stringqueryoperatorinput>;
  readonly presentationWidth?: Maybe<intqueryoperatorinput>;
  readonly presentationHeight?: Maybe<intqueryoperatorinput>;
};

export type imagesharpgroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<imagesharpedge>;
  readonly nodes: ReadonlyArray<imagesharp>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type imagesharporiginal = {
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type imagesharporiginalfilterinput = {
  readonly width?: Maybe<floatqueryoperatorinput>;
  readonly height?: Maybe<floatqueryoperatorinput>;
  readonly src?: Maybe<stringqueryoperatorinput>;
};

export type imagesharpresize = {
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type imagesharpresizefilterinput = {
  readonly src?: Maybe<stringqueryoperatorinput>;
  readonly tracedSVG?: Maybe<stringqueryoperatorinput>;
  readonly width?: Maybe<intqueryoperatorinput>;
  readonly height?: Maybe<intqueryoperatorinput>;
  readonly aspectRatio?: Maybe<floatqueryoperatorinput>;
  readonly originalName?: Maybe<stringqueryoperatorinput>;
};

export type imagesharpresolutions = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type imagesharpresolutionsfilterinput = {
  readonly base64?: Maybe<stringqueryoperatorinput>;
  readonly tracedSVG?: Maybe<stringqueryoperatorinput>;
  readonly aspectRatio?: Maybe<floatqueryoperatorinput>;
  readonly width?: Maybe<floatqueryoperatorinput>;
  readonly height?: Maybe<floatqueryoperatorinput>;
  readonly src?: Maybe<stringqueryoperatorinput>;
  readonly srcSet?: Maybe<stringqueryoperatorinput>;
  readonly srcWebp?: Maybe<stringqueryoperatorinput>;
  readonly srcSetWebp?: Maybe<stringqueryoperatorinput>;
  readonly originalName?: Maybe<stringqueryoperatorinput>;
};

export type imagesharpsizes = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type imagesharpsizesfilterinput = {
  readonly base64?: Maybe<stringqueryoperatorinput>;
  readonly tracedSVG?: Maybe<stringqueryoperatorinput>;
  readonly aspectRatio?: Maybe<floatqueryoperatorinput>;
  readonly src?: Maybe<stringqueryoperatorinput>;
  readonly srcSet?: Maybe<stringqueryoperatorinput>;
  readonly srcWebp?: Maybe<stringqueryoperatorinput>;
  readonly srcSetWebp?: Maybe<stringqueryoperatorinput>;
  readonly sizes?: Maybe<stringqueryoperatorinput>;
  readonly originalImg?: Maybe<stringqueryoperatorinput>;
  readonly originalName?: Maybe<stringqueryoperatorinput>;
  readonly presentationWidth?: Maybe<intqueryoperatorinput>;
  readonly presentationHeight?: Maybe<intqueryoperatorinput>;
};

export type imagesharpsortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<imagesharpfieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type internal = {
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type internalfilterinput = {
  readonly content?: Maybe<stringqueryoperatorinput>;
  readonly contentDigest?: Maybe<stringqueryoperatorinput>;
  readonly description?: Maybe<stringqueryoperatorinput>;
  readonly fieldOwners?: Maybe<stringqueryoperatorinput>;
  readonly ignoreType?: Maybe<booleanqueryoperatorinput>;
  readonly mediaType?: Maybe<stringqueryoperatorinput>;
  readonly owner?: Maybe<stringqueryoperatorinput>;
  readonly type?: Maybe<stringqueryoperatorinput>;
};

export type intqueryoperatorinput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

/** Node Interface */
export type node = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type nodefilterinput = {
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type nodefilterlistinput = {
  readonly elemMatch?: Maybe<nodefilterinput>;
};

export type pageinfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type potrace = {
  readonly turnPolicy?: Maybe<potraceturnpolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
};

export type potraceturnpolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type query = {
  readonly file?: Maybe<file>;
  readonly allFile: fileconnection;
  readonly directory?: Maybe<directory>;
  readonly allDirectory: directoryconnection;
  readonly sitePage?: Maybe<sitepage>;
  readonly allSitePage: sitepageconnection;
  readonly site?: Maybe<site>;
  readonly allSite: siteconnection;
  readonly imageSharp?: Maybe<imagesharp>;
  readonly allImageSharp: imagesharpconnection;
  readonly siteBuildMetadata?: Maybe<sitebuildmetadata>;
  readonly allSiteBuildMetadata: sitebuildmetadataconnection;
  readonly sitePlugin?: Maybe<siteplugin>;
  readonly allSitePlugin: sitepluginconnection;
};

export type queryfileargs = {
  sourceInstanceName: Maybe<stringqueryoperatorinput>;
  absolutePath: Maybe<stringqueryoperatorinput>;
  relativePath: Maybe<stringqueryoperatorinput>;
  extension: Maybe<stringqueryoperatorinput>;
  size: Maybe<intqueryoperatorinput>;
  prettySize: Maybe<stringqueryoperatorinput>;
  modifiedTime: Maybe<datequeryoperatorinput>;
  accessTime: Maybe<datequeryoperatorinput>;
  changeTime: Maybe<datequeryoperatorinput>;
  birthTime: Maybe<datequeryoperatorinput>;
  root: Maybe<stringqueryoperatorinput>;
  dir: Maybe<stringqueryoperatorinput>;
  base: Maybe<stringqueryoperatorinput>;
  ext: Maybe<stringqueryoperatorinput>;
  name: Maybe<stringqueryoperatorinput>;
  relativeDirectory: Maybe<stringqueryoperatorinput>;
  dev: Maybe<intqueryoperatorinput>;
  mode: Maybe<intqueryoperatorinput>;
  nlink: Maybe<intqueryoperatorinput>;
  uid: Maybe<intqueryoperatorinput>;
  gid: Maybe<intqueryoperatorinput>;
  rdev: Maybe<intqueryoperatorinput>;
  ino: Maybe<floatqueryoperatorinput>;
  atimeMs: Maybe<floatqueryoperatorinput>;
  mtimeMs: Maybe<floatqueryoperatorinput>;
  ctimeMs: Maybe<floatqueryoperatorinput>;
  atime: Maybe<datequeryoperatorinput>;
  mtime: Maybe<datequeryoperatorinput>;
  ctime: Maybe<datequeryoperatorinput>;
  birthtime: Maybe<datequeryoperatorinput>;
  birthtimeMs: Maybe<floatqueryoperatorinput>;
  blksize: Maybe<intqueryoperatorinput>;
  blocks: Maybe<intqueryoperatorinput>;
  publicURL: Maybe<stringqueryoperatorinput>;
  childImageSharp: Maybe<imagesharpfilterinput>;
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
};

export type queryallfileargs = {
  filter: Maybe<filefilterinput>;
  sort: Maybe<filesortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type querydirectoryargs = {
  sourceInstanceName: Maybe<stringqueryoperatorinput>;
  absolutePath: Maybe<stringqueryoperatorinput>;
  relativePath: Maybe<stringqueryoperatorinput>;
  extension: Maybe<stringqueryoperatorinput>;
  size: Maybe<intqueryoperatorinput>;
  prettySize: Maybe<stringqueryoperatorinput>;
  modifiedTime: Maybe<datequeryoperatorinput>;
  accessTime: Maybe<datequeryoperatorinput>;
  changeTime: Maybe<datequeryoperatorinput>;
  birthTime: Maybe<datequeryoperatorinput>;
  root: Maybe<stringqueryoperatorinput>;
  dir: Maybe<stringqueryoperatorinput>;
  base: Maybe<stringqueryoperatorinput>;
  ext: Maybe<stringqueryoperatorinput>;
  name: Maybe<stringqueryoperatorinput>;
  relativeDirectory: Maybe<stringqueryoperatorinput>;
  dev: Maybe<intqueryoperatorinput>;
  mode: Maybe<intqueryoperatorinput>;
  nlink: Maybe<intqueryoperatorinput>;
  uid: Maybe<intqueryoperatorinput>;
  gid: Maybe<intqueryoperatorinput>;
  rdev: Maybe<intqueryoperatorinput>;
  ino: Maybe<floatqueryoperatorinput>;
  atimeMs: Maybe<floatqueryoperatorinput>;
  mtimeMs: Maybe<floatqueryoperatorinput>;
  ctimeMs: Maybe<floatqueryoperatorinput>;
  atime: Maybe<datequeryoperatorinput>;
  mtime: Maybe<datequeryoperatorinput>;
  ctime: Maybe<datequeryoperatorinput>;
  birthtime: Maybe<datequeryoperatorinput>;
  birthtimeMs: Maybe<floatqueryoperatorinput>;
  blksize: Maybe<intqueryoperatorinput>;
  blocks: Maybe<intqueryoperatorinput>;
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
};

export type queryalldirectoryargs = {
  filter: Maybe<directoryfilterinput>;
  sort: Maybe<directorysortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type querysitepageargs = {
  path: Maybe<stringqueryoperatorinput>;
  component: Maybe<stringqueryoperatorinput>;
  internalComponentName: Maybe<stringqueryoperatorinput>;
  componentChunkName: Maybe<stringqueryoperatorinput>;
  matchPath: Maybe<stringqueryoperatorinput>;
  isCreatedByStatefulCreatePages: Maybe<booleanqueryoperatorinput>;
  pluginCreator: Maybe<sitepluginfilterinput>;
  pluginCreatorId: Maybe<stringqueryoperatorinput>;
  componentPath: Maybe<stringqueryoperatorinput>;
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
};

export type queryallsitepageargs = {
  filter: Maybe<sitepagefilterinput>;
  sort: Maybe<sitepagesortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type querysiteargs = {
  buildTime: Maybe<datequeryoperatorinput>;
  siteMetadata: Maybe<sitesitemetadatafilterinput>;
  port: Maybe<intqueryoperatorinput>;
  host: Maybe<stringqueryoperatorinput>;
  polyfill: Maybe<booleanqueryoperatorinput>;
  pathPrefix: Maybe<stringqueryoperatorinput>;
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
};

export type queryallsiteargs = {
  filter: Maybe<sitefilterinput>;
  sort: Maybe<sitesortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type queryimagesharpargs = {
  fixed: Maybe<imagesharpfixedfilterinput>;
  resolutions: Maybe<imagesharpresolutionsfilterinput>;
  fluid: Maybe<imagesharpfluidfilterinput>;
  sizes: Maybe<imagesharpsizesfilterinput>;
  original: Maybe<imagesharporiginalfilterinput>;
  resize: Maybe<imagesharpresizefilterinput>;
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
};

export type queryallimagesharpargs = {
  filter: Maybe<imagesharpfilterinput>;
  sort: Maybe<imagesharpsortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type querysitebuildmetadataargs = {
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
  buildTime: Maybe<datequeryoperatorinput>;
};

export type queryallsitebuildmetadataargs = {
  filter: Maybe<sitebuildmetadatafilterinput>;
  sort: Maybe<sitebuildmetadatasortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type querysitepluginargs = {
  id: Maybe<stringqueryoperatorinput>;
  parent: Maybe<nodefilterinput>;
  children: Maybe<nodefilterlistinput>;
  internal: Maybe<internalfilterinput>;
  resolve: Maybe<stringqueryoperatorinput>;
  name: Maybe<stringqueryoperatorinput>;
  version: Maybe<stringqueryoperatorinput>;
  pluginOptions: Maybe<sitepluginpluginoptionsfilterinput>;
  nodeAPIs: Maybe<stringqueryoperatorinput>;
  browserAPIs: Maybe<stringqueryoperatorinput>;
  ssrAPIs: Maybe<stringqueryoperatorinput>;
  pluginFilepath: Maybe<stringqueryoperatorinput>;
  packageJson: Maybe<sitepluginpackagejsonfilterinput>;
};

export type queryallsitepluginargs = {
  filter: Maybe<sitepluginfilterinput>;
  sort: Maybe<sitepluginsortinput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type site = node & {
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata?: Maybe<sitesitemetadata>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type sitebuildtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type sitebuildmetadata = node & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
  readonly buildTime?: Maybe<Scalars['Date']>;
};

export type sitebuildmetadatabuildtimeargs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type sitebuildmetadataconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitebuildmetadataedge>;
  readonly nodes: ReadonlyArray<sitebuildmetadata>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<sitebuildmetadatagroupconnection>;
};

export type sitebuildmetadataconnectiondistinctargs = {
  field: sitebuildmetadatafieldsenum;
};

export type sitebuildmetadataconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: sitebuildmetadatafieldsenum;
};

export type sitebuildmetadataedge = {
  readonly next?: Maybe<sitebuildmetadata>;
  readonly node: sitebuildmetadata;
  readonly previous?: Maybe<sitebuildmetadata>;
};

export type sitebuildmetadatafieldsenum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type sitebuildmetadatafilterinput = {
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
  readonly buildTime?: Maybe<datequeryoperatorinput>;
};

export type sitebuildmetadatagroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitebuildmetadataedge>;
  readonly nodes: ReadonlyArray<sitebuildmetadata>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type sitebuildmetadatasortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<sitebuildmetadatafieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type siteconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<siteedge>;
  readonly nodes: ReadonlyArray<site>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<sitegroupconnection>;
};

export type siteconnectiondistinctargs = {
  field: sitefieldsenum;
};

export type siteconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: sitefieldsenum;
};

export type siteedge = {
  readonly next?: Maybe<site>;
  readonly node: site;
  readonly previous?: Maybe<site>;
};

export type sitefieldsenum =
  | 'buildTime'
  | 'siteMetadata___url'
  | 'siteMetadata___title'
  | 'siteMetadata___author'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitefilterinput = {
  readonly buildTime?: Maybe<datequeryoperatorinput>;
  readonly siteMetadata?: Maybe<sitesitemetadatafilterinput>;
  readonly port?: Maybe<intqueryoperatorinput>;
  readonly host?: Maybe<stringqueryoperatorinput>;
  readonly polyfill?: Maybe<booleanqueryoperatorinput>;
  readonly pathPrefix?: Maybe<stringqueryoperatorinput>;
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type sitegroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<siteedge>;
  readonly nodes: ReadonlyArray<site>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type sitepage = node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly pluginCreator?: Maybe<siteplugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
  readonly componentPath?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
};

export type sitepageconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitepageedge>;
  readonly nodes: ReadonlyArray<sitepage>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<sitepagegroupconnection>;
};

export type sitepageconnectiondistinctargs = {
  field: sitepagefieldsenum;
};

export type sitepageconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: sitepagefieldsenum;
};

export type sitepageedge = {
  readonly next?: Maybe<sitepage>;
  readonly node: sitepage;
  readonly previous?: Maybe<sitepage>;
};

export type sitepagefieldsenum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___options___emitWarning'
  | 'pluginCreator___pluginOptions___options___failOnError'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___fonts___family'
  | 'pluginCreator___pluginOptions___fonts___variants'
  | 'pluginCreator___pluginOptions___formats'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___codegenConfig___typesPrefix'
  | 'pluginCreator___pluginOptions___codegenConfig___maybeValue'
  | 'pluginCreator___pluginOptions___codegenConfig___immutableTypes'
  | 'pluginCreator___pluginOptions___codegenConfig___preResolveTypes'
  | 'pluginCreator___pluginOptions___codegenConfig___addUnderscoreToArgsType'
  | 'pluginCreator___pluginOptions___codegenPlugins'
  | 'pluginCreator___pluginOptions___codegenPlugins___resolve'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitepagefilterinput = {
  readonly path?: Maybe<stringqueryoperatorinput>;
  readonly component?: Maybe<stringqueryoperatorinput>;
  readonly internalComponentName?: Maybe<stringqueryoperatorinput>;
  readonly componentChunkName?: Maybe<stringqueryoperatorinput>;
  readonly matchPath?: Maybe<stringqueryoperatorinput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<booleanqueryoperatorinput>;
  readonly pluginCreator?: Maybe<sitepluginfilterinput>;
  readonly pluginCreatorId?: Maybe<stringqueryoperatorinput>;
  readonly componentPath?: Maybe<stringqueryoperatorinput>;
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
};

export type sitepagegroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitepageedge>;
  readonly nodes: ReadonlyArray<sitepage>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type sitepagesortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<sitepagefieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type siteplugin = node & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<node>;
  readonly children: ReadonlyArray<node>;
  readonly internal: internal;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<sitepluginpluginoptions>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly packageJson?: Maybe<sitepluginpackagejson>;
};

export type sitepluginconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitepluginedge>;
  readonly nodes: ReadonlyArray<siteplugin>;
  readonly pageInfo: pageinfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<siteplugingroupconnection>;
};

export type sitepluginconnectiondistinctargs = {
  field: sitepluginfieldsenum;
};

export type sitepluginconnectiongroupargs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: sitepluginfieldsenum;
};

export type sitepluginedge = {
  readonly next?: Maybe<siteplugin>;
  readonly node: siteplugin;
  readonly previous?: Maybe<siteplugin>;
};

export type sitepluginfieldsenum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___stages'
  | 'pluginOptions___options___emitWarning'
  | 'pluginOptions___options___failOnError'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___fonts'
  | 'pluginOptions___fonts___family'
  | 'pluginOptions___fonts___variants'
  | 'pluginOptions___formats'
  | 'pluginOptions___start_url'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___short_name'
  | 'pluginOptions___background_color'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fileName'
  | 'pluginOptions___codegenConfig___typesPrefix'
  | 'pluginOptions___codegenConfig___maybeValue'
  | 'pluginOptions___codegenConfig___immutableTypes'
  | 'pluginOptions___codegenConfig___preResolveTypes'
  | 'pluginOptions___codegenConfig___addUnderscoreToArgsType'
  | 'pluginOptions___codegenConfig___avoidOptionals___object'
  | 'pluginOptions___codegenPlugins'
  | 'pluginOptions___codegenPlugins___resolve'
  | 'pluginOptions___codegenPlugins___options___namingConvention'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type sitepluginfilterinput = {
  readonly id?: Maybe<stringqueryoperatorinput>;
  readonly parent?: Maybe<nodefilterinput>;
  readonly children?: Maybe<nodefilterlistinput>;
  readonly internal?: Maybe<internalfilterinput>;
  readonly resolve?: Maybe<stringqueryoperatorinput>;
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly version?: Maybe<stringqueryoperatorinput>;
  readonly pluginOptions?: Maybe<sitepluginpluginoptionsfilterinput>;
  readonly nodeAPIs?: Maybe<stringqueryoperatorinput>;
  readonly browserAPIs?: Maybe<stringqueryoperatorinput>;
  readonly ssrAPIs?: Maybe<stringqueryoperatorinput>;
  readonly pluginFilepath?: Maybe<stringqueryoperatorinput>;
  readonly packageJson?: Maybe<sitepluginpackagejsonfilterinput>;
};

export type siteplugingroupconnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<sitepluginedge>;
  readonly nodes: ReadonlyArray<siteplugin>;
  readonly pageInfo: pageinfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type sitepluginpackagejson = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<sitepluginpackagejsondependencies>>>;
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<sitepluginpackagejsondevdependencies>>>;
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<sitepluginpackagejsonpeerdependencies>>>;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type sitepluginpackagejsondependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type sitepluginpackagejsondependenciesfilterinput = {
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly version?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpackagejsondependenciesfilterlistinput = {
  readonly elemMatch?: Maybe<sitepluginpackagejsondependenciesfilterinput>;
};

export type sitepluginpackagejsondevdependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type sitepluginpackagejsondevdependenciesfilterinput = {
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly version?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpackagejsondevdependenciesfilterlistinput = {
  readonly elemMatch?: Maybe<sitepluginpackagejsondevdependenciesfilterinput>;
};

export type sitepluginpackagejsonfilterinput = {
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly description?: Maybe<stringqueryoperatorinput>;
  readonly version?: Maybe<stringqueryoperatorinput>;
  readonly main?: Maybe<stringqueryoperatorinput>;
  readonly author?: Maybe<stringqueryoperatorinput>;
  readonly license?: Maybe<stringqueryoperatorinput>;
  readonly dependencies?: Maybe<sitepluginpackagejsondependenciesfilterlistinput>;
  readonly devDependencies?: Maybe<sitepluginpackagejsondevdependenciesfilterlistinput>;
  readonly peerDependencies?: Maybe<sitepluginpackagejsonpeerdependenciesfilterlistinput>;
  readonly keywords?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpackagejsonpeerdependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type sitepluginpackagejsonpeerdependenciesfilterinput = {
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly version?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpackagejsonpeerdependenciesfilterlistinput = {
  readonly elemMatch?: Maybe<sitepluginpackagejsonpeerdependenciesfilterinput>;
};

export type sitepluginpluginoptions = {
  readonly stages?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly options?: Maybe<sitepluginpluginoptionsoptions>;
  readonly name?: Maybe<Scalars['String']>;
  readonly path?: Maybe<Scalars['String']>;
  readonly fonts?: Maybe<ReadonlyArray<Maybe<sitepluginpluginoptionsfonts>>>;
  readonly formats?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly start_url?: Maybe<Scalars['String']>;
  readonly theme_color?: Maybe<Scalars['String']>;
  readonly short_name?: Maybe<Scalars['String']>;
  readonly background_color?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly cache_busting_mode?: Maybe<Scalars['String']>;
  readonly include_favicon?: Maybe<Scalars['Boolean']>;
  readonly legacy?: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head?: Maybe<Scalars['Boolean']>;
  readonly cacheDigest?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly codegenConfig?: Maybe<sitepluginpluginoptionscodegenconfig>;
  readonly codegenPlugins?: Maybe<ReadonlyArray<Maybe<sitepluginpluginoptionscodegenplugins>>>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
};

export type sitepluginpluginoptionscodegenconfig = {
  readonly typesPrefix?: Maybe<Scalars['String']>;
  readonly maybeValue?: Maybe<Scalars['String']>;
  readonly immutableTypes?: Maybe<Scalars['Boolean']>;
  readonly preResolveTypes?: Maybe<Scalars['Boolean']>;
  readonly addUnderscoreToArgsType?: Maybe<Scalars['Boolean']>;
  readonly avoidOptionals?: Maybe<sitepluginpluginoptionscodegenconfigavoidoptionals>;
};

export type sitepluginpluginoptionscodegenconfigavoidoptionals = {
  readonly object?: Maybe<Scalars['Boolean']>;
};

export type sitepluginpluginoptionscodegenconfigavoidoptionalsfilterinput = {
  readonly object?: Maybe<booleanqueryoperatorinput>;
};

export type sitepluginpluginoptionscodegenconfigfilterinput = {
  readonly typesPrefix?: Maybe<stringqueryoperatorinput>;
  readonly maybeValue?: Maybe<stringqueryoperatorinput>;
  readonly immutableTypes?: Maybe<booleanqueryoperatorinput>;
  readonly preResolveTypes?: Maybe<booleanqueryoperatorinput>;
  readonly addUnderscoreToArgsType?: Maybe<booleanqueryoperatorinput>;
  readonly avoidOptionals?: Maybe<sitepluginpluginoptionscodegenconfigavoidoptionalsfilterinput>;
};

export type sitepluginpluginoptionscodegenplugins = {
  readonly resolve?: Maybe<Scalars['String']>;
  readonly options?: Maybe<sitepluginpluginoptionscodegenpluginsoptions>;
};

export type sitepluginpluginoptionscodegenpluginsfilterinput = {
  readonly resolve?: Maybe<stringqueryoperatorinput>;
  readonly options?: Maybe<sitepluginpluginoptionscodegenpluginsoptionsfilterinput>;
};

export type sitepluginpluginoptionscodegenpluginsfilterlistinput = {
  readonly elemMatch?: Maybe<sitepluginpluginoptionscodegenpluginsfilterinput>;
};

export type sitepluginpluginoptionscodegenpluginsoptions = {
  readonly namingConvention?: Maybe<Scalars['String']>;
};

export type sitepluginpluginoptionscodegenpluginsoptionsfilterinput = {
  readonly namingConvention?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpluginoptionsfilterinput = {
  readonly stages?: Maybe<stringqueryoperatorinput>;
  readonly options?: Maybe<sitepluginpluginoptionsoptionsfilterinput>;
  readonly name?: Maybe<stringqueryoperatorinput>;
  readonly path?: Maybe<stringqueryoperatorinput>;
  readonly fonts?: Maybe<sitepluginpluginoptionsfontsfilterlistinput>;
  readonly formats?: Maybe<stringqueryoperatorinput>;
  readonly start_url?: Maybe<stringqueryoperatorinput>;
  readonly theme_color?: Maybe<stringqueryoperatorinput>;
  readonly short_name?: Maybe<stringqueryoperatorinput>;
  readonly background_color?: Maybe<stringqueryoperatorinput>;
  readonly icon?: Maybe<stringqueryoperatorinput>;
  readonly cache_busting_mode?: Maybe<stringqueryoperatorinput>;
  readonly include_favicon?: Maybe<booleanqueryoperatorinput>;
  readonly legacy?: Maybe<booleanqueryoperatorinput>;
  readonly theme_color_in_head?: Maybe<booleanqueryoperatorinput>;
  readonly cacheDigest?: Maybe<stringqueryoperatorinput>;
  readonly fileName?: Maybe<stringqueryoperatorinput>;
  readonly codegenConfig?: Maybe<sitepluginpluginoptionscodegenconfigfilterinput>;
  readonly codegenPlugins?: Maybe<sitepluginpluginoptionscodegenpluginsfilterlistinput>;
  readonly pathCheck?: Maybe<booleanqueryoperatorinput>;
};

export type sitepluginpluginoptionsfonts = {
  readonly family?: Maybe<Scalars['String']>;
  readonly variants?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type sitepluginpluginoptionsfontsfilterinput = {
  readonly family?: Maybe<stringqueryoperatorinput>;
  readonly variants?: Maybe<stringqueryoperatorinput>;
};

export type sitepluginpluginoptionsfontsfilterlistinput = {
  readonly elemMatch?: Maybe<sitepluginpluginoptionsfontsfilterinput>;
};

export type sitepluginpluginoptionsoptions = {
  readonly emitWarning?: Maybe<Scalars['Boolean']>;
  readonly failOnError?: Maybe<Scalars['Boolean']>;
};

export type sitepluginpluginoptionsoptionsfilterinput = {
  readonly emitWarning?: Maybe<booleanqueryoperatorinput>;
  readonly failOnError?: Maybe<booleanqueryoperatorinput>;
};

export type sitepluginsortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<sitepluginfieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type sitesitemetadata = {
  readonly url?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type sitesitemetadatafilterinput = {
  readonly url?: Maybe<stringqueryoperatorinput>;
  readonly title?: Maybe<stringqueryoperatorinput>;
  readonly author?: Maybe<stringqueryoperatorinput>;
  readonly description?: Maybe<stringqueryoperatorinput>;
};

export type sitesortinput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<sitefieldsenum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<sortorderenum>>>;
};

export type sortorderenum = 'ASC' | 'DESC';

export type stringqueryoperatorinput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};

export type GetFixedImageQueryVariables = Exact<{ [key: string]: never }>;

export type GetFixedImageQuery = {
  readonly musicMatch?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly ampe?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly liv2bgirl?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
};

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteMetadataQuery = {
  readonly site?: Maybe<{
    readonly siteMetadata?: Maybe<{
      readonly url?: Maybe<string>;
      readonly title?: Maybe<string>;
      readonly author?: Maybe<string>;
      readonly description?: Maybe<string>;
    }>;
  }>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  readonly logo?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = {
  readonly subhead?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly old?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly infoarch?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly wireframe?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly mockup?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly playlists?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly artists?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
  readonly stats?: Maybe<{
    readonly childImageSharp?: Maybe<{ readonly fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }>;
  }>;
};

export type GatsbyImageSharpFixedFragment = {
  readonly base64?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  readonly base64?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFluidFragment = {
  readonly base64?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  readonly maxHeight: number;
  readonly maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  readonly base64?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};

export type GatsbyImageSharpResolutionsFragment = {
  readonly base64?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  readonly base64?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
};

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpSizesFragment = {
  readonly base64?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpSizes_WithWebpFragment = {
  readonly base64?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  readonly tracedSVG?: Maybe<string>;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
};

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp?: Maybe<string>;
  readonly srcSetWebp?: Maybe<string>;
  readonly sizes: string;
};
