import React, { Component } from 'react';
import './logowall.css';
import LogoWallItem from './logowallItem';
import { Transition } from 'react-transition-group';

class LogoWall extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			srcs : props.src,
			brandsin: 0,

		}
		if(props.scrollTrigger != null) this.state.animStarted = false;
	}

	componentDidMount(){
		// this.timerInterval = setInterval( () => this.timerCall() , 100);
	}



	 componentDidUpdate() {
	
		if (this.props.scrollTrigger == null) return
		
		if (this.props.scrollTrigger && !this.state.animStarted) {
			console.log('here');
			
			this.timerInterval = setInterval( () => this.timerCall() , 100);
			this.setState({ animStarted:true });
		}
	  }

	animIn(){
		let { srcs } =  this.state ;
		srcs[ this.state.brandsin ].in = true;		
	}
	
	timerCall() {
		
		if (this.state.brandsin === this.state.srcs.length)
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
		timeout={ 100 }
		mountOnEnter
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
				this.state.srcs.map( (pos, id) => {
					if (this.props.scrollTrigger == null) 
					{
						return (
							<LogoWallItem
								src={`images/logowall/${pos.src}`} key={id} alt={pos.alt}>
							</LogoWallItem>
						)
					}
					else return this.transWrap(pos,id);
				}  )
			}
			</ul>
		);
	}
	

}
 export default LogoWall;