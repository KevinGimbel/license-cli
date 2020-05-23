declare type License = {
  title: string;
  "spdx-id": string;
  description: string;
  how: string;
  using: [string];
  permissions: [string];
  conditions: [string];
  limitations: [string];
  text: string;
};
