export type InputType = {
  label: string;
  id: string;
  showIcon?: boolean;
  type?: "email" | "password";
  value: string;
  onChange: (value: string) => void;
};
