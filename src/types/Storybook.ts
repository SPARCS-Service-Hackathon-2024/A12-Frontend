export interface Story {
  createdAt: string;
  familyName: string;
  imageUrl: string;
  priority: number;
  projectName: string;
  text: string;
  userName: string;
  wavUrl: string;
}

export interface Storybook {
  storybookName: string;
  stories: Story[];
}
