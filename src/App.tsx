import Main from './components/Main';
import FlowProvider from './contexts/FlowProvider';
import StoreProvider from './contexts/Store';

function App() {
  return (
    <FlowProvider>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </FlowProvider>
  );
}

export default App;
