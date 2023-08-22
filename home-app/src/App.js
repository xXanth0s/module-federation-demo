import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
import Button from 'component-app/Button';
import Dialog from 'component-app/Dialog';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
    }
    handleClick(ev) {
        console.log(ev);
        this.setState({
            dialogVisible: true,
        });
    }
    handleSwitchVisible(visible) {
        this.setState({
            dialogVisible: visible,
        });
    }
    render() {
        return (
            <div className="App">
                <Suspense fallback={<div>Loading Header...</div>}>
                    <Header/>
                </Suspense>
                <div className="container">
                    Main Page Content
                    <Button type="primary"/>
                    <h4>Dialog:</h4>
                    <button onClick={this.handleClick}>click me to open Dialog</button>
                    <Dialog switchVisible={this.handleSwitchVisible} visible={this.state.dialogVisible} />
                </div>
            </div>
        );
    }
}