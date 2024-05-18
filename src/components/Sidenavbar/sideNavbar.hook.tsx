import { DragEvent } from "react";

export const useNodes = () => {
  // In the future, there might be additional nodes returned from this hook.
  // We may utilize an API call here to fetch the available nodes to be displayed in the nodes panel.

  return [
    {
      node: 'Message',
      icon: '/messageBlue.svg',
      onDragStart: (
        event: DragEvent<HTMLDivElement>,
        nodeType: string,
        content: string
      ) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('content', content);
        event.dataTransfer.effectAllowed = 'move';
      },
    },
  ];
};
