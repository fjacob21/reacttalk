import React from 'react'
import Navbar from './navbar'

function leftPad(number, targetLength) {
    var output = number.toString(16) + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

class ParentEx4 extends React.Component{
        constructor(props) {
                super(props);
                this.state = {color: "#FF0000"};
        }

        componentDidMount(){
                this.timer = setInterval(this.tick.bind(this), 600);
        }

        componentWillUnmount(){
                clearInterval(this.timer);
        }

        tick(){
                //console.debug(this.state)
                var r = Math.floor(Math.random()*255);
                var g =  Math.floor(Math.random()*255);
                var b =  Math.floor(Math.random()*255);
                r++;
                g++;
                b++;
                if (r>255)r=0;
                if (g>255)g=0;
                if (b>255)b=0;
                //console.debug(r,g,b)

                this.state.color = "#" + leftPad(r,2) + leftPad(g,2) + leftPad(b,2);// r.toString(16) + g.toString(16) + b.toString(16);
                this.setState(this.state);
        }

        render(){
                return (
                        <div className='parent'>
                                <div style={{backgroundColor:this.state.color}}>Cool Color {this.state.color}</div>
                                <Navbar prev='ex3' next='ex5'></Navbar>
                        </div>)
        }
}

module.exports = ParentEx4;
