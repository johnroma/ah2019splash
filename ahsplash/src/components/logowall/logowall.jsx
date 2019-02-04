import React, { Component } from 'react';
import './logowall.css';
import LogoWallItem from './logowallItem';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types'

class LogoWall extends Component {
	constructor(props) {
		super(props);
		
		if(props.animItems!==undefined){
			this.state = {	
				srcs : props.src,
				id: props.id,
				brandsin: 0,
				animFinished: false
			}
		}
		else {
			this.state = {
				srcs : props.src,
				id: props.id
			}
		}

	}

	shouldComponentUpdate(newProps, newState) {
			
		if(newProps.animItems!== this.props.animItems) {
			let cln = [...this.state.srcs];
			cln.forEach( (a) => a.in = false );
			this.setState({ srcs:cln });
			this.timerInterval = setInterval( () => this.timerCall() , 100);
			return true;	
		}
		else if (newState.src!==this.props.src) return true;
		else return false;

	  }

	animIn(){
		let cln = [...this.state.srcs];
		cln[ this.state.brandsin ].in = true;
		
		this.setState( { srcs:cln, brandsin: this.state.brandsin+1 })
	}
	
	timerCall() {
		if (this.state.brandsin === this.state.srcs.length){	
			clearInterval( this.timerInterval );
			this.props.onUpDuration( document.getElementById(this.props.id).clientHeight);
			this.setState({ animFinished:true });			
		}
		else this.animIn();	
	}
	


	transWrap(p,i) {
		return (
		<Transition key={ "trans"+i } in={ this.state.srcs[i].in } timeout={ 100 } mountOnEnter>
		{
			( status ) => this.getItem(p,i,status)
		}
		</Transition>);
	}

	getItem(p,i,transStatus){
		
		return (
			<LogoWallItem
					src={`images/logowall/${p.src}`} key={i} alt={p.alt}
					{...(transStatus? { transClass:'fade-transition fade-' + transStatus }:{})}		
			/>
		)
	}

	render() {
		let visibility = this.props.visibility === undefined? "":this.props.visibility?"":" hide" ;

		return (
			<ul className={`hexGrid${visibility}`} id={this.state.id}>
			{
				this.state.srcs.map( (pos, id) => this.props.animItems === undefined? this.getItem(pos,id):this.transWrap(pos,id) )
			}
			</ul>
		);
	}
	

}
 export default LogoWall;

 LogoWall.defaultProps = {
	visibility: true
  };

 LogoWall.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.array.isRequired,
	onUpDuration: PropTypes.func,
	animItems: PropTypes.bool,
	visibility: PropTypes.bool
  };