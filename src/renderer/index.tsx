import { createRoot } from 'react-dom/client';
import { ipcRenderer } from 'electron';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
ipcRenderer.once('ipc-example', (event, args) => {
  console.log(args)
})

ipcRenderer.send('ipc-example', ['ping'])
