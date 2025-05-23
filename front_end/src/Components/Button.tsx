import React from "react";

interface ButtonProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    colours?: keyof typeof buttonColours;
    disabled?: boolean;
    type?: string;
    className?: string;
    icon?: string | null;
    onClick?: () => void;
}

const buttonSizes = {
    sm: 'w-[120px] h-[40px] text-sm',
    md: 'w-[160px] h-[46px] text-base',
    lg: 'w-[210px] h-[48px] text-lg',
};

const buttonColours = {
    'primary-primary': {
        base: 'bg-orange-500 text-white',
        hover: 'hover:bg-orange-600',
        disabled: 'bg-orange-100 text-orange-300 cursor-not-allowed',
    },
    'primary-secondary': {
        base: 'bg-indigo-500 text-white',
        hover: 'hover:bg-indigo-600',
        disabled: 'bg-indigo-100 text-indigo-300 cursor-not-allowed',
    },
    'primary-gray': {
        base: 'bg-gray-900 text-white',
        hover: 'hover:bg-gray-800',
        disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    },
    'secondary-primary': {
        base: 'bg-orange-100 text-orange-600',
        hover: 'hover:bg-orange-200',
        disabled: 'bg-orange-100 text-orange-300 cursor-not-allowed',
    },
    'secondary-secondary': {
        base: 'bg-indigo-100 text-indigo-600',
        hover: 'hover:bg-indigo-200',
        disabled: 'bg-indigo-100 text-indigo-300 cursor-not-allowed',
    },
    'secondary-gray': {
        base: 'bg-gray-100 text-gray-600',
        hover: 'hover:bg-gray-200',
        disabled: 'bg-gray-100 text-gray-400 cursor-not-allowed',
    },
    'tertiary-primary': {
        base: 'text-orange-500',
        hover: 'hover:bg-orange-100',
        disabled: 'text-orange-300 cursor-not-allowed',
    },
    'tertiary-secondary': {
        base: 'text-indigo-500',
        hover: 'hover:bg-indigo-100',
        disabled: 'text-indigo-300 cursor-not-allowed',
    },
    'tertiary-gray': {
        base: 'text-gray-900',
        hover: 'hover:bg-gray-100',
        disabled: 'text-gray-400 cursor-not-allowed',
    },
};

const Button: React.FC<ButtonProps> = ({text, size = 'md', colours = 'primary-primary', disabled = false, className = '', icon = null, onClick,}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center text-center
                ${buttonSizes[size]}
                ${
                !disabled
                    ? `${buttonColours[colours].base} ${buttonColours[colours].hover}`
                    : buttonColours[colours].disabled
            }
                ${className}`}
        >
            {text}
            {icon && <img src={icon} alt="icon" className="w-5 h-5 ml-2" />}
        </button>
    );
};

export default Button;
