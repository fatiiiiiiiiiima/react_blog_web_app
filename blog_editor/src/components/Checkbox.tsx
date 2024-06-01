import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
  onClick?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, onClick }) => {
  const handleClick = () => {
    // Call the onChange function with the new checked state
    onChange(!checked);
  };

  return (
    <div className="inline-block relative border-2 border-darkgreen border-solid">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        onClick={onClick}
        className="opacity-0 absolute h-5 w-5"
      />
      <svg
        className={`h-5 w-5 ${checked ? 'text-green-500' : 'text-gray-300'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default Checkbox;