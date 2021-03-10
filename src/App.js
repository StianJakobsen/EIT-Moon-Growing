import logo from './logo.svg';
import './App.css';
import '@google/model-viewer'

const modelViewerStyle = {
  width: 400,
  height: 600,
  margin: 0,
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)',
}

const App = () => (
  <div style={modelViewerStyle}>
    <model-viewer src="../assets/CHAHIN_BOTTLE_OF_SODA-1.gltf" camera-controls></model-viewer>
  </div>
);

export default App;
