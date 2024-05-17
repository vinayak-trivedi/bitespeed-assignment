import { Edge, Node } from 'reactflow';
import { useFlow } from '../../contexts/FlowProvider';
import SaveChangesPresentation from './Presentation';

const SaveChanges: React.FC = () => {
  const { nodes, edges } = useFlow();

  function saveNodeChanges() {
    const targetHandlesCount = nodes.reduce((count: number, node: Node) => {
      const incomingEdges = edges.filter(
        (edge: Edge) => edge.target === node.id
      );
      if (incomingEdges.length === 0) {
        return count + 1;
      }
      return count;
    }, 0);

    if (targetHandlesCount > 1) {
      alert('Failure');
    } else {
      alert('Success');
    }
  }

  return <SaveChangesPresentation saveNodeChanges={saveNodeChanges} />;
};

export default SaveChanges;
