export interface LayoutGeneratorSchema {
  name: string;
  project: string;
  directory?: string;
  tags?: string;
  directory?: string;
  flat?: boolean;
  liquidOnly?: boolean;
  skipTests?: boolean;
}
