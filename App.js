import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;