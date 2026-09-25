export type PromptDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Prompt {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  type: string;
  difficulty: PromptDifficulty;
  technologies: string[];
  estimatedTime: string;
  tags: string[];
  features: string[];
  useCase: string;
  prompt: string;
  popularity?: number;
}
