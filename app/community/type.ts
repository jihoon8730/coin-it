export interface CommunityDataType {
  _id: string | undefined;
  title: string;
  content: string;
  categories: string;
}

export interface PostData {
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
