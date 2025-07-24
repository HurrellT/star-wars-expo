export type ChipColor = "primary" | "secondary" | "success" | "warning" | "danger" | "default" | "muted";
export type ChipSize = "sm" | "md" | "lg";
export type ChipVariant = "flat" | "solid" | "bordered" | "ghost";

export const getColorClasses = (color: ChipColor, variant: ChipVariant): string => {
  const colorMap = {
    primary: {
      flat: 'bg-blue-500/20 border-blue-500/30',
      solid: 'bg-blue-500 border-blue-500',
      bordered: 'bg-transparent border-blue-500',
      ghost: 'bg-transparent hover:bg-blue-500/20',
    },
    secondary: {
      flat: 'bg-purple-500/20 border-purple-500/30',
      solid: 'bg-purple-500 border-purple-500',
      bordered: 'bg-transparent border-purple-500',
      ghost: 'bg-transparent hover:bg-purple-500/20',
    },
    success: {
      flat: 'bg-green-500/20 border-green-500/30',
      solid: 'bg-green-500 border-green-500',
      bordered: 'bg-transparent border-green-500',
      ghost: 'bg-transparent hover:bg-green-500/20',
    },
    warning: {
      flat: 'bg-yellow-500/20 border-yellow-500/30',
      solid: 'bg-yellow-500 border-yellow-500',
      bordered: 'bg-transparent border-yellow-500',
      ghost: 'bg-transparent hover:bg-yellow-500/20',
    },
    danger: {
      flat: 'bg-red-500/20 border-red-500/30',
      solid: 'bg-red-500 border-red-500',
      bordered: 'bg-transparent border-red-500',
      ghost: 'bg-transparent hover:bg-red-500/20',
    },
    muted: {
      flat: 'bg-gray-500/20 border-gray-500/30',
      solid: 'bg-gray-500 border-gray-500',
      bordered: 'bg-transparent border-gray-500',
      ghost: 'bg-transparent hover:bg-gray-500/20',
    },
    default: {
      flat: 'bg-slate-500/20 border-slate-500/30',
      solid: 'bg-slate-500 border-slate-500',
      bordered: 'bg-transparent border-slate-500',
      ghost: 'bg-transparent hover:bg-slate-500/20',
    },
  };

  return colorMap[color][variant] || colorMap.default.flat;
};

export const getTextColorClasses = (color: ChipColor, variant: ChipVariant): string => {
  const textColorMap = {
    primary: {
      flat: 'text-blue-700 dark:text-blue-200',
      solid: 'text-white',
      bordered: 'text-blue-700 dark:text-blue-200',
      ghost: 'text-blue-700 dark:text-blue-200',
    },
    secondary: {
      flat: 'text-purple-700 dark:text-purple-200',
      solid: 'text-white',
      bordered: 'text-purple-700 dark:text-purple-200',
      ghost: 'text-purple-700 dark:text-purple-200',
    },
    success: {
      flat: 'text-green-700 dark:text-green-200',
      solid: 'text-white',
      bordered: 'text-green-700 dark:text-green-200',
      ghost: 'text-green-700 dark:text-green-200',
    },
    warning: {
      flat: 'text-yellow-700 dark:text-yellow-200',
      solid: 'text-white',
      bordered: 'text-yellow-700 dark:text-yellow-200',
      ghost: 'text-yellow-700 dark:text-yellow-200',
    },
    danger: {
      flat: 'text-red-700 dark:text-red-200',
      solid: 'text-white',
      bordered: 'text-red-700 dark:text-red-200',
      ghost: 'text-red-700 dark:text-red-200',
    },
    muted: {
      flat: 'text-gray-700 dark:text-gray-200',
      solid: 'text-white',
      bordered: 'text-gray-700 dark:text-gray-200',
      ghost: 'text-gray-700 dark:text-gray-200',
    },
    default: {
      flat: 'text-slate-700 dark:text-slate-200',
      solid: 'text-white',
      bordered: 'text-slate-700 dark:text-slate-200',
      ghost: 'text-slate-700 dark:text-slate-200',
    },
  };

  return textColorMap[color][variant] || textColorMap.default.flat;
};

export const getSizeClasses = (size: ChipSize): string => {
  const sizeMap = {
    sm: 'px-2 py-1 text-xs rounded-full',
    md: 'px-3 py-1.5 text-sm rounded-full',
    lg: 'px-4 py-2 text-base rounded-full',
  };

  return sizeMap[size] || sizeMap.md;
};

export const getBorderClass = (variant: ChipVariant): string => {
  return variant === 'bordered' ? 'border' : '';
};
