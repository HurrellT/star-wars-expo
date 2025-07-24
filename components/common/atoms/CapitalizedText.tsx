import React from 'react';
import { Text } from '~/components/ui/text';

type CapitalizedListProps = {
  value: string;
  className?: string;
};

const CapitalizedText = ({ value, className }: CapitalizedListProps) => {
  return (
    <Text className={`text-sm capitalize ${className || ''}`}>
      {value}
    </Text>
  );
};

export default CapitalizedText;
