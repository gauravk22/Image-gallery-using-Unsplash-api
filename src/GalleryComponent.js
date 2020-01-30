import React from 'react';
import List from './ListComponent';

import LazyLoad from 'react-lazyload';


export default class Gallery extends React.Component{
    constructor(props){
        super(props)

	this.state={image:[]}

	this.getApi=this.getApi.bind(this)
    }

	componentDidMount(){
		this.getApi(Math.floor(Math.random()*50));
	}

   getApi(page){
	let arr=[];

	const api = "https://api.unsplash.com";
	const key = "5983f8d9ac20eb5cbf317b3e725d485351010d3cfca2316d591d66d1befadd9c";
		fetch(`${api}/photos/?client_id=${key}&page=${page}&per_page=100`)
		.then((data)=>data.json())
		.then(output=>{

			output.map((wholedata,index)=>{
					
				arr.push(wholedata.urls.small);
				/*return (
					//<List key={index} img={wholedata.urls.small}/>
					arr.push(wholedata.urls.small)	
					)*/
			})

			this.setState({image:arr},()=>console.log(this.state.image))
		})

	}

    render(){
        return(
            <div>
                <h1>IMAGE GALLERY</h1>
			<div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',position:'absolute',left:80}}>
		{this.state.image.map((i,index)=>(
		<LazyLoad  key={index} offset={[-100,0]} placeholder={<h1>Loading....</h1>} debounce={300} >	
			<List img={i}/>
		</LazyLoad>)
		)	}
			</div>
            </div>
        )
    }
}
