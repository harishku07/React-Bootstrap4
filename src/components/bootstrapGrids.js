import React, { Component } from 'react';
import '../style.css/grid1.css'

class Grids extends Component {
    componentDidMount(){
        document.body.classList.add('background-color'-'#dfe2e9')
    }
    render() {
        return (
            <div className="container-fluid mycontainer" style={{ backgroundColor: 'white', color: 'red' }}>
                <div className="row myrow">
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                    <div className="col mycol"> row1 col1</div>
                </div>
            </div>

        );
    }
}

export default Grids;
