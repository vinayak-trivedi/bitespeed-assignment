export const useGetInitialNodes = () => {
  // currently this returns only a hardcoded values but in future we might be calling an API here and returning the intials node here
  return [
    {
      id: '1',
      type: 'node',
      data: { heading: 'Send Message', content: 'Text 1' },
      position: { x: 10, y: 200 },
    },
    {
      id: '2',
      type: 'node',
      data: { heading: 'Send Message', content: 'Text 2' },
      position: { x: 200, y: 100 },
    },
  ];
};
