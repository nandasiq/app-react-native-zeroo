import { StatusBar , SafeAreaView } from 'react-native';
import Checkout from './src/telas/checkout'

export default function App() {
  return (
    <SafeAreaView>      
      <StatusBar/>
      <Checkout/>
    </SafeAreaView>
  );
}
