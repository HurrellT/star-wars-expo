import React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';

type PersonDetailItemProps = {
  label: string;
  value: string | React.ReactNode;
  className?: string;
};

const PersonDetailItem = ({ label, value, className }: PersonDetailItemProps) => {
  return (
    <View className={`mb-3 ${className || ''}`}>
      <View className="flex-row items-center flex-wrap">
        <Text className="font-semibold text-muted-foreground text-sm">{label}:</Text>
        {typeof value === 'string' ? (
          <Text className="ml-2 text-sm">{value}</Text>
        ) : (
          <View className="ml-2">{value}</View>
        )}
      </View>
    </View>
  );
};

export default PersonDetailItem;
