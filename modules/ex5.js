import React from 'react'
import Navbar from './navbar'


class Button extends React.Component{
        constructor(props) {
                super(props);
                this.state = {selected: false};
        }

        btClick(event){
                this.state.selected = !this.state.selected;
                this.setState(this.state);
                if (this.props.onClick != undefined)
                        this.props.onClick(event);
        }

        render(){
                var className = 'button';
                if (this.state.selected)
                        className += ' btselect';
                return (
                        <div className={className} onClick={this.btClick.bind(this)}>
                                {this.props.children}
                        </div>)
        }
}

class ParentEx5 extends React.Component{
        constructor(props) {
                super(props);
        }

        btClick(event){

        }

        render(){
                return (
                        <div className='parent'>
                                <Button onClick={this.btClick.bind(this)}>Click Me!</Button>
                                <Navbar prev='ex4' next=''></Navbar>
                        </div>)
        }
}

module.exports = ParentEx5;
