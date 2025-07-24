import React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import Chip from '~/components/ui/Chip';
import { extractIdFromUrl } from '~/utils/personUtils';

type RelatedItemsSectionProps = {
  title: string;
  items: string[];
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "default" | "muted";
  prefix?: string;
  className?: string;
};

const PersonRelatedItemsSection = ({ 
  title, 
  items, 
  color, 
  prefix = "ID",
  className 
}: RelatedItemsSectionProps) => {
  if (items.length === 0) return null;

  return (
    <View className={`mb-4 ${className || ''}`}>
      <Text className="text-lg font-semibold text-muted-foreground mb-3">{title}</Text>
      <View className="flex-row flex-wrap gap-2">
        {items.map((itemUrl) => (
          <Chip
            key={itemUrl}
            size="sm"
            variant="flat"
            color={color}
            className="mr-2 mb-2"
          >
            {prefix}: {extractIdFromUrl(itemUrl)}
          </Chip>
        ))}
      </View>
    </View>
  );
};

export default PersonRelatedItemsSection;
