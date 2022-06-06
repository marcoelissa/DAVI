import DurationInput from './DurationInput';
import { render } from 'utils/tests';
// import { defaultProps } from './fixtures';
import { fireEvent } from '@testing-library/react';
import { DURATION_LIMITS } from 'constants/Duration';

let spyOnChange = jest.fn();

let defaultProps = {
  value: 0,
  onChange: spyOnChange,
};

describe('Duration Input', () => {
  // Define methods
  let getByRole;
  let getByLabelText;
  let getAllByLabelText;

  describe('Basic interactions', () => {
    beforeEach(() => {
      let result = render(<DurationInput {...defaultProps} />);

      // Link methods to the DOM
      getByRole = result.getByRole;
      getByLabelText = result.getByLabelText;
      getAllByLabelText = result.getAllByLabelText;
      const inputElement = getByRole('input-modal');
      fireEvent.click(inputElement);
    });

    it('input value reflects duration picker selection', () => {
      const increaseButton = getByLabelText('Increase seconds');
      fireEvent.click(increaseButton);

      const saveButton = getByLabelText('Save');
      fireEvent.click(saveButton);

      expect(spyOnChange).toHaveBeenCalledWith(1);
    });

    it('should increase value if user clicks the arrow up', () => {
      const increaseButton = getByLabelText('Increase seconds');
      fireEvent.click(increaseButton);

      const numericalInput = getByLabelText('Numerical input for seconds');
      expect(numericalInput).toHaveDisplayValue('1');
    });

    it('should decrease value if user clicks the arrow down', () => {
      const increaseButton = getByLabelText('Increase seconds');
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);

      const decreaseButton = getByLabelText('Decrease seconds');
      fireEvent.click(decreaseButton);

      const numericalInput = getByLabelText('Numerical input for seconds');
      expect(numericalInput).toHaveDisplayValue('2');
    });

    it('input can be set manually', () => {
      const numericalInput = getByLabelText('Numerical input for seconds');
      fireEvent.change(numericalInput, { target: { value: 5 } });

      expect(numericalInput).toHaveDisplayValue('5');
    });

    it('should render a warning if value is higher than permitted', async () => {
      const numericalInput = getByLabelText('Numerical input for seconds');
      fireEvent.change(numericalInput, { target: { value: 61 } });

      const warningMessage = getByLabelText('Warning message for seconds');
      expect(warningMessage).toBeInTheDocument();
    });

    it('arrow down gets disabled if value cannot be decreased', () => {
      const decreaseButton = getByLabelText('Decrease seconds');
      expect(decreaseButton).toBeDisabled();
    });

    it('arrow up gets disabled if value cannot be increased', () => {
      const numericalInput = getByLabelText('Numerical input for seconds');
      fireEvent.change(numericalInput, { target: { value: 59 } });
      const increaseButton = getByLabelText('Increase seconds');
      expect(increaseButton).toBeDisabled();
    });

    it('all values have a numerical input, and increase and decrease buttons', () => {
      const numberOfTimePeriods = Object.keys(DURATION_LIMITS).length;
      const numberOfNumericalInputs = getAllByLabelText('Numerical input', {
        exact: false,
      }).length;
      const numberOfIncreaseButtons = getAllByLabelText('Increase', {
        exact: false,
      }).length;
      const numberOfDecreaseButtons = getAllByLabelText('Decrease', {
        exact: false,
      }).length;

      expect(numberOfTimePeriods).toEqual(numberOfNumericalInputs);
      expect(numberOfIncreaseButtons).toEqual(numberOfNumericalInputs);
      expect(numberOfDecreaseButtons).toEqual(numberOfNumericalInputs);
    });

    it('values in seconds are correctly calculated', () => {
      // Click ALL the increase buttons once
      Object.keys(DURATION_LIMITS).forEach(duration => {
        const increaseButton = getByLabelText(`Increase ${duration}`);
        fireEvent.click(increaseButton);
      });

      const saveButton = getByLabelText('Save');
      fireEvent.click(saveButton);

      // Total number of seconds in one year, one month, one day, one hour one minute and one second
      const totalNumberOfSeconds = 34909261;
      expect(spyOnChange).toHaveBeenNthCalledWith(7, totalNumberOfSeconds);
    });
  });
});
