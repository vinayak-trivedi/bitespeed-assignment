import { Edge, Node } from 'reactflow';
import { useFlow } from '../../contexts/FlowProvider';
import SaveChangesPresentation from './Presentation';
import { useGetToastMethods } from '../hooks/appHooks';

const SaveChanges: React.FC = () => {
  const { nodes, edges } = useFlow();
  const { notifySuccess, notifyError } = useGetToastMethods();

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
      notifyError('Cannot Save Flow, all nodes are not connected!');
    } else {
      notifySuccess('Flow saved successfully!');
    }
  }

  return <SaveChangesPresentation saveNodeChanges={saveNodeChanges} />;
};

export default SaveChanges;
