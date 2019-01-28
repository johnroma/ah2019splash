import React, { Component } from 'react';
import './logowall.css';
import LogoWallItem from './logowallItem';
import { Transition } from 'react-transition-group';

class LogoWall extends Component {
	constructor(props) {
		super(props);

		props.src.forEach(sr => sr.in=false );
		
		this.state = {
			srcs : props.src,
			brandsin: 0,
			animStarted: false
		}
	}

	componentDidMount(){
		// this.timerInterval = setInterval( () => this.timerCall() , 100);
	}



	 componentDidUpdate() {
	
		if (this.props.scrollPast && !this.state.animStarted) {
			
			this.timerInterval = setInterval( () => this.timerCall() , 100);
			this.setState({ animStarted:true });
		}
	  }

	animIn(){
		let { srcs } =  this.state ;
		srcs[ this.state.brandsin ].in = true;		
	}
	
	timerCall() {
		// console.log('df', this.state.brandsin );
		
		if (this.state.brandsin == this.state.srcs.length)
			clearInterval( this.timerInterval );
		else {
			this.animIn();	
			this.setState({ brandsin: this.state.brandsin+1});
		}
			
	}
	
	transWrap(p,i) {
		return (
		<Transition 
		key={ "trans"+i }
		in={ this.state.srcs[i].in }
		timeout={ 1000 }
		>{
			( status ) => {
				return (
				<LogoWallItem
					src={`images/logowall/${p.src}`} key={i} alt={p.alt}
					transClass={ 'fade-transition fade-' + status }>
				</LogoWallItem>
				);
			}
		}
			
		</Transition>);
	}

	render() {
		
		return (
			<ul className="hexGrid">
			{
				this.state.srcs.map( (pos, id) => this.transWrap(pos,id) )
			}
			</ul>
		);
	}
	

}
 export default LogoWall;