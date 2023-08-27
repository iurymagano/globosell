import styled, { css } from 'styled-components/native';
import { theme } from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity`
  ${({ margin }: ButtonContainerProps) => css`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: blue;
    margin: ${margin ? margin : '0'};
  `}
`;
export const ButtonDisabled = styled(ContainerButton)`
  background-color: ${theme.colors.grayTheme.gray100};
`;

export const Gradient = styled(LinearGradient)`
  ${({ margin }: ButtonContainerProps) => css`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: blue;
    margin: ${margin ? margin : '0'};
  `}
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-left: 10px;
`;

export const ButtonGradient = styled.TouchableOpacity`
  ${({ margin }: ButtonContainerProps) => css`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin: ${margin ? margin : '0'};
  `}
`;
export const ButtonSecundary = styled(ContainerButton)`
  ${({ margin }: ButtonContainerProps) => css`
    margin: ${margin ? margin : '0'};
    background-color: transparent;
    border: 1px solid ${theme.colors.mainTheme.primary};
  `}
`;
