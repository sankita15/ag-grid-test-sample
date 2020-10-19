import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import TextBox from "./TextBox";
import DatePickerComponent from "./DatePickerComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", cellRendererFramework: TextBox
            }, {
                headerName: "Price", field: "price"
            }, {
                headerName: "DateCol", cellRendererFramework: DatePickerComponent
            },],
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }]
        }
    }

    render() {
        return (
            <div className="ag-theme-alpine"
                style={{
                    height: '38vh',
                    width: '1000px' }}
            >
                <AgGridReact getRowHeight={() => 50}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
                <DatePickerComponent/>
            </div>
        );
    }
}

export default App;
