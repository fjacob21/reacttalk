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
        }

        render(){
                return (
                        <div className='parent'>
                                <Child> Parent </Child>
                                        <Highlight className='hljs'>
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
        </Highlight>
                                <Navbar prev='' next='ex2'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx1;
