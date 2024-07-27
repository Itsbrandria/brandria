export type Projects = Project[];

export interface Project {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  portfolio_category: number[];
  class_list: string[];
  acf: any[];
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _acf_changed: boolean;
  _eb_attr: string;
  footnotes: string;
}

export interface YoastHeadJson {
  title: string;
  robots: Robots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_modified_time: string;
  og_image: OgImage[];
  twitter_card: string;
  twitter_misc: TwitterMisc;
  schema: Schema;
}

export interface Robots {
  index: string;
  follow: string;
  "max-snippet": string;
  "max-image-preview": string;
  "max-video-preview": string;
}

export interface OgImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

export interface TwitterMisc {
  "Est. reading time": string;
}

export interface Schema {
  "@context": string;
  "@graph": Graph[];
}

export interface Graph {
  "@type": string;
  "@id": string;
  url?: string;
  name?: string;
  isPartOf?: IsPartOf;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: Breadcrumb;
  inLanguage?: string;
  potentialAction?: PotentialAction[];
  itemListElement?: ItemListElement[];
  description?: string;
}

export interface IsPartOf {
  "@id": string;
}

export interface Breadcrumb {
  "@id": string;
}

export interface PotentialAction {
  "@type": string;
  target: any;
  "query-input"?: string;
}

export interface ItemListElement {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": Featuredmedum[];
  "wp:attachment": WpAttachment[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface Featuredmedum {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
