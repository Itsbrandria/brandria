export type PortfolioCategory =
  | "Branding"
  | "UI/UX"
  | "Web Development"
  | "Video Production";

export interface Project {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  categories?: PortfolioCategory[];
  class_list: string[];
  acf: any[];
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
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
