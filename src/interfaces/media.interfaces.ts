// Interface for the properties of the ContextMedia component
export interface ContextMediaProps {
  // The current value of the input
  value: string;

  // Function to handle changes in the input field
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Function to handle key down events in the input field
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  // Function to reset the numbers array
  reset: () => void;

  // Array of numbers to be used in the calculation
  numbers: number[];

  // The result of the calculation
  median: number;
}
