import React from 'react';
import { Text, EColor } from '../Text';

export function Loading() {
  return (
    <Text size={16} color={EColor.grey99}>
      Загрузка..
    </Text>
  );
}
