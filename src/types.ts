export interface Shift {
  time: string;
  location?: string;
  hours: number;
  button: string;
  overlap: boolean;
}

export interface SlotsProps {
  date: string;
  shifts: Shift[];
  isAvailableTab?: boolean;
}
export interface ButtonProps {
  title: string;
  color: string;
  disabled?: boolean;
  // onClick: () => Promise<void>;
}
