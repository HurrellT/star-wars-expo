import React from 'react';
import { render } from '@testing-library/react-native';
import Chip from '../common/atoms/Chip/Chip';

// Mock the problematic dependencies
jest.mock('@rn-primitives/slot', () => ({
  Slot: ({ children }: { children: React.ReactNode }) => children,
  Root: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('~/components/ui/text', () => {
  const { Text: RNText } = jest.requireActual('react-native');
  return {
    Text: ({ children, className, ...props }: any) => (
      <RNText className={className} {...props}>
        {children}
      </RNText>
    ),
  };
});

describe('Chip Component', () => {
  it('renders correctly with default props', () => {
    const tree = render(<Chip>Default Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with flat variant', () => {
    const tree = render(<Chip variant="flat">Flat Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with solid variant', () => {
    const tree = render(<Chip variant="solid">Solid Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with bordered variant', () => {
    const tree = render(<Chip variant="bordered">Bordered Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with ghost variant', () => {
    const tree = render(<Chip variant="ghost">Ghost Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with primary color', () => {
    const tree = render(<Chip color="primary">Primary Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with secondary color', () => {
    const tree = render(<Chip color="secondary">Secondary Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with danger color', () => {
    const tree = render(<Chip color="danger">Danger Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with small size', () => {
    const tree = render(<Chip size="sm">Small Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with large size', () => {
    const tree = render(<Chip size="lg">Large Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const tree = render(<Chip className="custom-chip">Custom Chip</Chip>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with all props combined', () => {
    const tree = render(
      <Chip variant="solid" color="primary" size="lg" className="combined-chip">
        Combined Props Chip
      </Chip>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});