import React from 'react'
import './css/hexagon.css'
import styled from 'styled-components';
var count = 0;
const HoverDiv = styled.div`
	color: #000;
	:hover {
        background-color: white;
        cursor: pointer;
        font-size: larger;
	}
`

class Hexagon extends React.Component {
    gameNameArr = ['Abuse', 
        'Zone 66',
        'Keen', 
        'Jazz Jackrabbit',
        'Solitaire',
        'Super Mario',
        'Sonic'
    ]
    colorArr = ['red',
        'yellow',
        'MediumSeaGreen',
        'DodgerBlue',
        'white']
    constructor(props) {
        super(props)
        this.color = this.randomColor()
        this.gameName = this.randomName()
        this.id = 'hexagon' + count++
    }
    randomColor() {
        let length = this.colorArr.length
        let x = Math.floor(Math.random() * length); 
        let result = this.colorArr[x]
        return result
    }
    randomName() {
        let length = this.gameNameArr.length
        let x = Math.floor(Math.random() * length); 
        let result = this.gameNameArr[x]
        return result
    }
    render() {
        return (
<div>
    <HoverDiv className="hexagon" id={this.id} 
        style={{background: this.color}}>
        {this.gameName}
    </HoverDiv>
</div>
        )
    }
}

export default Hexagon