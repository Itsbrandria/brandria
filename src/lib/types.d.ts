export type Projects = Project[];

export type Blogs = Bog[];

export type PortfolioCategory =
  | "Branding"
  | "UI/UX"
  | "Web Development"
  | "Video Production";


export interface Blog{
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
  categories?: PortfolioCategory[];
}

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
  categories?: PortfolioCategory[];
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
  description?: string;
  robots: {
    index: string;
    follow: string;
  };
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  og_image: {
    url: string;
    width?: number;
    height?: number;
    type?: string;
  }[];
  twitter_card: string;
  twitter_misc: {
    "Est. reading time": string;
    "Written by"?: string;
  };
  schema: {
    "@context": string;
    "@graph": Array<{
      "@type": string;
      "@id": string;
      [key: string]: any;
    }>;
  };
}

export type Projects = Project[];
