import { registerRootComponent } from 'expo';
import { Buffer } from 'buffer'; // import buffer

// Define global.Buffer para evitar erros de libs que usam 'buffer'
if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
}

import Main from './src/views/screens/Main';

registerRootComponent(Main);
