import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Groups } from '@screens/Groups';
import theme from '@theme/index'
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' translucent />
        {
          fontsLoaded ? <Groups /> : <Loading />
        }
      </ThemeProvider>
    </>

  );
}