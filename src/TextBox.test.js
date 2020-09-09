import React from "react";
import {fireEvent, render, wait} from "@testing-library/react";
import TextBox from "./TextBox";

describe('Textbox', function () {
    it('sample textbox', async () => {
        const { getByTestId, debug } = render(<TextBox/>)

        await wait(() => [
            debug(),
            fireEvent.change(getByTestId('input-element'), {target: {value: '1234'}}),
            debug()
        ])
    });
});
