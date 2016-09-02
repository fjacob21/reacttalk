import React , { Component, PropTypes } from 'react'
import { browserHistory} from 'react-router'

class Navbar extends React.Component{
        constructor(props) {
                super(props);
                this.state = {color: "#FF0000"};
        }

        componentDidMount(){
        }

        componentWillUnmount(){
        }

        onPrev(event){
                event.preventDefault();
                console.debug('Move to ', this.props.prev)
                this.context.router.push(this.props.prev)
        }

        onNext(event){
                event.preventDefault();
                console.debug('Move to ', this.props.next)
                this.context.router.push(this.props.next)
        }

        render(){
                return (
                        <div className='navbar'>
                                <div className='prev' onClick={this.onPrev.bind(this)}>{this.props.prev}</div>
                                <div className='next' onClick={this.onNext.bind(this)}>{this.props.next}</div>
                        </div>)
        }
}

Navbar.contextTypes = {
  router: PropTypes.object.isRequired
};
module.exports = Navbar;
