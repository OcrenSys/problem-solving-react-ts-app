import React from 'react';
import { ContextMedia } from './context';

export const Media: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const [value, setValue] = React.useState<string>('');
  const [numbers, setNumbers] = React.useState<number[]>([]);
  const [median, setMedian] = React.useState<number>(0);

  // Function to calculate the median of an array of numbers
  const getMedian = (array: number[]) => {
    // Sort the array in ascending order
    const sortedNumbers = [...array].sort((a, b) => a - b);
    // Find the middle index
    const middle = Math.floor(sortedNumbers.length / 2);
    // Calculate the median
    const median =
      sortedNumbers.length % 2 === 0
        ? // If even, average the two middle numbers
          (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
        : // If odd, take the middle number
          sortedNumbers[middle];

    return median;
  };

  // Handler for input change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Handler for key down event on the input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const parsedValue = parseInt(value || '0', 10);
      if (!isNaN(parsedValue)) {
        setNumbers((prev) => {
          const result = [...prev, parsedValue];
          setMedian(getMedian(result));
          return result;
        });
        setValue(''); // Reset the input value
      }
    }
  };

  // Function to reset the numbers array and the median
  const reset = () => {
    setNumbers([]);
    setMedian(0);
  };

  return (
    <ContextMedia.Provider
      value={{
        value,
        handleChange,
        handleKeyDown,
        numbers,
        median,
        reset,
      }}
    >
      <div className="bg-gray-800 rounded-xl p-8 text-center text-white w-full shadow-sm shadow-black">
        <p className="text-2xl font-bold text-center mb-8 text-slate-400">
          Calculate the median
        </p>
        {children}
      </div>
    </ContextMedia.Provider>
  );
};
