export interface CommunityDataType {
  _id: string | undefined;
  email?: string | null;
  name?: string | null;
  avatar?: string | null;
  title: string;
  content: string;
  categories: string;
  createAt: number;
}

export interface PostData {
  email?: string | null;
  name?: string | null;
  avatar?: string | null;
  title: string;
  content: string;
  categories: string;
}

export interface ApiResponse {
  message: string;
  data?: {
    title: string;
    content: string;
    categories: string;
  };
}
