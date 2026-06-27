export interface Certificate {
  name: string;
  organization: string;
  year: string;
  image: string;
  description: string;
  topics: string[];
  url?: string;
  comingSoon?: boolean;
}
