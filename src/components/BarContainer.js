import React, {Component} from 'react';
import BarCanvas from './BarCanvas';

class BarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    changeSize = () => {
        const barContainer = this.refs.barContainer;
        const width = barContainer.offsetWidth;
        const height = barContainer.offsetHeight;
        this.setState({
            width,
            height
        });
    }

    componentDidMount() {
        this.changeSize();
        window.addEventListener('resize', this.changeSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeSize);
    }

    render() {
        const {height, width} = this.state;
        return (
            <div className="bar-container" ref="barContainer">
                <BarCanvas element={this.props.element} height={height} width={width}/>
            </div>
        );
    }
}

export default BarContainer;
