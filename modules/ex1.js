import React from 'react'
import Navbar from './navbar'
var Highlight = require('react-highlight');

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
                this.state = {srcvisible: true};
        }

        onClick(event){

        }

        render(){
                return (
                        <div className='parent' onClick={this.onClick.bind(this)}>
                                <Child> Parent </Child>
                                <div className='srcframe'>
                                        <Highlight className='src hljs'>
          {`import React from 'react'
          import Navbar from './navbar'
          var Highlight = require('react-highlight');

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

          module.exports = ParentEx1;`}
        </Highlight></div>
                                <Navbar prev='' next='ex2'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx1;
