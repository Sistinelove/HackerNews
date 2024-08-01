export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Comment[];
  level: number;
  comments_count: number;
}
export interface Comment {
  id: number;
  user?: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  level: number;
  url: string;
  deleted?: boolean;
}
