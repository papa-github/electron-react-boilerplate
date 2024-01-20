import React, { useEffect } from 'react';
import { readJSONFile } from './fileUtils';
import { ipcRenderer } from 'electron';
export default function Dashboard() {
  // Dashboard will display a list of habits and vices, loaded from a local JSON file
  // Will add buttons to add new habits and vices, and edit existing ones

  // Get JSON data usign fileUtils.tsx
  const [jsonData, setJsonData] = React.useState<any>(null);

  useEffect(() => {
    ipcRenderer.invoke('read-user-data-json').then((result) => {
      setJsonData(result);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard!</h1>
      <div>
        <p>{JSON.stringify(jsonData)}</p>
      </div>
    </div>
  );
}
