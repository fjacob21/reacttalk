import React from 'react'
import Navbar from './navbar'

class Child extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='child' style={{backgroundColor:this.props.color}}>
                                Super Child 👶👶👶
                                {this.props.children}
                        </div>)
        }
}

class ParentEx2 extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='parent'>
                                <Child color="#FF0000"> Parent </Child>
                                <Navbar prev='/' next='ex3'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx2;
