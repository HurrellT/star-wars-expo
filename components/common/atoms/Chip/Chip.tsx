import React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { 
  ChipColor, 
  ChipSize, 
  ChipVariant, 
  getColorClasses, 
  getTextColorClasses,
  getSizeClasses, 
  getBorderClass 
} from './Chip.styles';

type ChipProps = {
  children: React.ReactNode;
  color?: ChipColor;
  size?: ChipSize;
  variant?: ChipVariant;
  className?: string;
};

const Chip = ({ 
  children, 
  color = "default", 
  size = "md", 
  variant = "flat",
  className = ""
}: ChipProps) => {
  const colorClasses = getColorClasses(color, variant);
  const textColorClasses = getTextColorClasses(color, variant);
  const sizeClasses = getSizeClasses(size);
  const borderClass = getBorderClass(variant);

  return (
    <View className={`self-start ${sizeClasses} ${colorClasses} ${borderClass} ${className}`}>
      <Text className={`font-medium ${textColorClasses}`}>
        {children}
      </Text>
    </View>
  );
};

export default Chip;
