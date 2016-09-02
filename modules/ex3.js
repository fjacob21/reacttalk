import React from 'react'
import Navbar from './navbar'

class Child extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='child'>
                                <div>Super Child 👶👶👶</div>
                                <div>Name:{this.props.children} </div>
                        </div>)
        }
}

class ParentEx3 extends React.Component{
        constructor(props) {
                super(props);
                this.state = {childs: ['Bob', 'John', 'Roger']};
        }

        render(){
                var childs = this.state.childs.map(function(name){
                      return (<Child key={name}>{name}</Child>);
                }.bind(this));
                return (
                        <div className='parent'>
                                <div>{childs}</div>
                                <Navbar prev='ex2' next='ex4'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx3;
