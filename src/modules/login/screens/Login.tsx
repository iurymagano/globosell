import { ContainerLogin } from './login.styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import { theme } from '../../../shared/themes/theme';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <ContainerLogin>
      <Text>Login</Text>
      <Input />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        margin="16px"
        title="ENTRAR"
        onPress={handleOnPress}
      />
    </ContainerLogin>
  );
};

export default Login;
