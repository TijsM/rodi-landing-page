export type UploadStep = "intro" | "login" | "upload" | "done";

export interface UploadPageProps {
  next: (step?: UploadStep) => void;
  setUser?: (user: any) => void;
  user?: any;
}
