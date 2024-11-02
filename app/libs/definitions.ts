export type Room = {
    id: number;
    name: string;
    link_url: string;
    room_icon_url: string;
  };
  
  export type Highlight = {
    id: number;
    name: string;
    image_url: string[];
    post_url: string;
  };
  
  export type Post = {
    topic_id: number;
    title: string;
    created_time: string;
    thumbnail_url?: string;
    comments_count: number;
    votes_count: number;
    author: {
      name: string;
      slug: string;
    };
    views_count: number;
  };
  