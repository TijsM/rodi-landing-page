export type UploadStep = "intro" | "login" | "upload" | "done";

export interface UploadPageProps {
  next: () => void;
  setUser?: (user: any) => void;
  user?: any;
}
