import React from 'react'
import Navbar from './navbar'

class Child extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='child'>
                                Super Child 👶👶👶
                                {this.props.children}
                        </div>)
        }
}

class ParentEx1 extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                return (
                        <div className='parent'>
                                <Child> Parent </Child>
                                <Navbar prev='' next='ex2'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx1;
