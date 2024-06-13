export interface Shift {
  time: string;
  location: string;
  hours: number;
}

export interface SlotsProps {
  date: string;
  shifts: Shift[];
  button: string;
  overlap: boolean;
}
export interface ButtonProps {
  title: string;
  color: string;
  disabled?: boolean;
  onClick: () => Promise<void>;
}
