import styled, { css } from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  size: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text`
  ${({ color, size, fontFamily }: ContainerTextProps) => css`
    color: ${color ? color : '#ffff'};
    font-family: ${fontFamily};
    font-size: ${size};
    padding-top: 3px;
  `}
`;
