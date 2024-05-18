import { fireEvent, render } from '@testing-library/react';
import SaveChangesPresentation from '../../components/SaveChanges/Presentation';

describe('<SaveChanges />', () => {
  it('should render SaveChanges component with a button which has text Save Changes', () => {
    const saveNodeChanges = jest.fn();
    const { getByText, getByTestId } = render(
      <SaveChangesPresentation saveNodeChanges={saveNodeChanges} />
    );
    const saveChangesContainer = getByTestId('save-changes-container');
    const saveChangesButton = getByText('Save Changes');

    expect(saveChangesContainer).toBeInTheDocument();
    expect(saveChangesButton).toBeInTheDocument();
  });

  it('should call saveNodeChanges function on clicking on save changes button', () => {
    const saveNodeChanges = jest.fn();
    const { getByText } = render(<SaveChangesPresentation saveNodeChanges={saveNodeChanges} />)
    const saveChangesButton = getByText('Save Changes');

    fireEvent.click(saveChangesButton)

    expect(saveNodeChanges).toHaveBeenCalledTimes(1)
  })
});
