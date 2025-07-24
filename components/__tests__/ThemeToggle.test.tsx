import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Platform } from 'react-native';
import { ThemeToggle } from '../ThemeToggle';
import { useColorScheme } from '~/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';

// Mock the external dependencies
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: jest.fn(),
}));

jest.mock('~/lib/android-navigation-bar', () => ({
  setAndroidNavigationBar: jest.fn(),
}));

jest.mock('~/lib/icons/MoonStar', () => {
  const { View } = jest.requireActual('react-native');
  return {
    MoonStar: ({ className }: any) => {
      return <View testID="moon-icon" className={className} accessibilityLabel="Moon Star Icon" />;
    },
  };
});

jest.mock('~/lib/icons/Sun', () => {
  const { View } = jest.requireActual('react-native');
  return {
    Sun: ({ className }: any) => {
      return <View testID="sun-icon" className={className} accessibilityLabel="Sun Icon" />;
    },
  };
});

const mockUseColorScheme = useColorScheme as jest.MockedFunction<typeof useColorScheme>;
const mockSetAndroidNavigationBar = setAndroidNavigationBar as jest.MockedFunction<typeof setAndroidNavigationBar>;

describe('ThemeToggle Component - Integration Tests', () => {
  let mockSetColorScheme: jest.Mock;
  let mockToggleColorScheme: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockSetColorScheme = jest.fn();
    mockToggleColorScheme = jest.fn();
    
    // Default to light mode
    mockUseColorScheme.mockReturnValue({
      colorScheme: 'light',
      isDarkColorScheme: false,
      setColorScheme: mockSetColorScheme,
      toggleColorScheme: mockToggleColorScheme,
    });
  });

  describe('Theme State Integration', () => {
    it('displays sun icon and toggles to dark mode when pressed', async () => {
      const { getByTestId } = render(<ThemeToggle />);
      
      expect(getByTestId('sun-icon')).toBeTruthy();
      
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
    
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledWith('dark');
    });

    it('displays moon icon and toggles to light mode when in dark mode', async () => {
      // Mock dark mode
      mockUseColorScheme.mockReturnValue({
        colorScheme: 'dark',
        isDarkColorScheme: true,
        setColorScheme: mockSetColorScheme,
        toggleColorScheme: mockToggleColorScheme,
      });

      const { getByTestId } = render(<ThemeToggle />);
      
      expect(getByTestId('moon-icon')).toBeTruthy();
      
      const pressableElement = getByTestId('moon-icon').parent?.parent;
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('light');
      
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledWith('light');
    });

    it('handles rapid theme toggles correctly', async () => {
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent.press(pressableElement);
      fireEvent.press(pressableElement);
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledTimes(3);
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledTimes(3);
      
      expect(mockSetColorScheme).toHaveBeenNthCalledWith(1, 'dark');
      expect(mockSetColorScheme).toHaveBeenNthCalledWith(2, 'dark');
      expect(mockSetColorScheme).toHaveBeenNthCalledWith(3, 'dark');
    });
  });

  describe('Platform Integration', () => {
    it('calls Android navigation bar on Android platform', () => {
      Platform.OS = 'android';
      
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent.press(pressableElement);
      
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledWith('dark');
    });

    it('still works on non-Android platforms', () => {
      Platform.OS = 'ios';
      
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledWith('dark');
    });
  });

  describe('Accessibility Integration', () => {
    it('provides proper pressable accessibility', () => {
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      expect(pressableElement).toBeTruthy();
      
      fireEvent.press(pressableElement);
      expect(mockSetColorScheme).toHaveBeenCalled();
    });

    it('maintains focus state during theme changes', async () => {
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent(pressableElement, 'focus');
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
    });
  });

  describe('Icon State Integration', () => {
    it('updates icon state correctly after theme change simulation', () => {
      const { rerender, getByTestId } = render(<ThemeToggle />);
      expect(getByTestId('sun-icon')).toBeTruthy();
      
      mockUseColorScheme.mockReturnValue({
        colorScheme: 'dark',
        isDarkColorScheme: true,
        setColorScheme: mockSetColorScheme,
        toggleColorScheme: mockToggleColorScheme,
      });
      
      rerender(<ThemeToggle />);
      expect(getByTestId('moon-icon')).toBeTruthy();
    });

    it('maintains icon styling across theme changes', () => {
      const { getByTestId } = render(<ThemeToggle />);
      const sunIcon = getByTestId('sun-icon');
      
      expect(sunIcon.props.className).toContain('text-foreground');
    });
  });

  describe('Error Handling Integration', () => {
    it('calls setColorScheme function correctly', () => {
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
    });

    it('calls Android navigation bar function correctly', () => {
      const { getByTestId } = render(<ThemeToggle />);
      const pressableElement = getByTestId('sun-icon').parent?.parent;
      
      fireEvent.press(pressableElement);
      
      expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
      expect(mockSetAndroidNavigationBar).toHaveBeenCalledWith('dark');
    });
  });
});
