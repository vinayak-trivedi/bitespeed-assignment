import Main from './components/Main';
import FlowProvider from './contexts/FlowProvider';

function App() {
  return (
    <FlowProvider>
      <Main />
    </FlowProvider>
  );
}

export default App;
