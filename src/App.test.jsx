import React from 'react';
import {fireEvent, render, wait, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('test sample', () => {
  it('should test sample 123', async () => {
    const { getAllByTestId, queryAllByTestId, debug } = render(<App />);

    await wait( () => [
        expect(screen.queryAllByTestId('input-element')[0].value).toEqual(""),
    ])
    //
      await fireEvent.change(screen.getAllByTestId('input-element')[0], {target: {value: '1234'}})
    //
      await wait(() => [
          expect(screen.getAllByTestId('input-element')[0].value).toEqual("1234")
      ])

      console.log(debug())

  });
});
