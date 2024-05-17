import { DragEvent } from "react";

export const useNodes = () => {
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
