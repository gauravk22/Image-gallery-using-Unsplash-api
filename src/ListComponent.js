import React from 'react'
import LazyLoad from 'react-lazyload';

export default class List extends React.Component{

		
	render(){
		return(
			<div>


			<img style={{width:300,height:300,marginLeft:500}} src={this.props.img}></img>
				
			
			</div>
		)

		}
	
}
