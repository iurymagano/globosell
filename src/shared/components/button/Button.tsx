import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import {
  ActivityIndicator,
  ButtonDisabled,
  ButtonSecundary,
  ContainerButton,
  Gradient,
} from './button.style';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, loading, disabled, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled margin={margin} {...props}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secundary:
      return (
        <ContainerButton margin={margin} {...props} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ContainerButton>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonSecundary margin={margin} {...props} onPress={handleOnPress}>
          <Gradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </Gradient>
        </ButtonSecundary>
      );
  }
};

export default Button;
