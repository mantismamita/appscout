import React, { Component } from 'react';

export default class Pagination extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  currentPage: this.props.page,
		  upperPageBound: 4,
		  lowerPageBound: 0,
		  isPrevBtnActive: 'disabled',
		  isNextBtnActive: '',
		  pageBound: 4
		}
	}

	onButtonClick(e, numPage) {
		const helper = this.props.helper
		const pageNum = parseInt(e.target.innerText)
        helper
            .setPage(pageNum).search()
			
			console.dir(pageNum)

		this.setState({
			currentPage: pageNum
		})
	}

	btnIncrementClick() {
		this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
		this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
		let listid = this.state.upperPageBound + 1;
		this.setState({ currentPage: listid});
	  }
	  
	btnDecrementClick() {
		this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
		this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
		let listid = this.state.upperPageBound - this.state.pageBound;
		this.setState({ currentPage: listid});
	}
	  
	btnPrevClick() {
		if((this.state.currentPage -1)%this.state.pageBound === 0 ){
			this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
			this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
		}
		let listid = this.state.currentPage - 1;
		this.setState({ currentPage : listid});
	}

  	btnNextClick() {
		if((this.state.currentPage +1) > this.state.upperPageBound ){
			this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
			this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
		}
		let listid = this.state.currentPage + 1;
		this.setState({ currentPage : listid});
  	}

    render() {
		const maxPages = this.props.allPages 
		var N = Array.apply(null, {length: maxPages}).map(Number.call, Number)
		let currPage = this.props.currentPage
		const prev = currPage !== 1 ? <button className="cdp_i">p</button> : ''
		const prevPage = this.state.currentPage -1
		const nextPage = this.state.currentPage +1

		const { currentPage, appsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
  
		const renderpages = N.map((item, index) => {
			let isCurrentPage = (index + 1 === currPage) ? 'cdp_i is-current' : 'cdp_i'
			return (
				<button 
					className={ isCurrentPage } 
					key={index} 
					onClick={(e) => this.onButtonClick(e)}>
					{ index + 1 }
				</button>
			)
		})

		let renderPrevBtn = null;
		if (isPrevBtnActive === 'disabled') {
			renderPrevBtn = 
			<button 
				className="cdp_i"
				onClick={(e) => this.onButtonClick(e)}>
				&lsaquo;
			</button>
		} else {
			renderPrevBtn = 
			<button 
				className="cdp_i"
				onClick={(e) => this.onButtonClick(e)}>
				&lsaquo;
			</button>
		}

		let renderNextBtn = null;
		if(isNextBtnActive === 'disabled') {
			renderNextBtn = 
			<button 
				className="cdp_i"
				onClick={(e) => this.onButtonClick(e)}>
				&rsaquo;
			</button>
		}
		else{
			renderNextBtn = 
			<button 
				className="cdp_i"
				onClick={(e) => this.onButtonClick(e)}>
				&rsaquo;
			</button>
		}

		return (
			<div className="pagination cdp" actpage="1">
					{renderPrevBtn}
					{renderpages}
					{renderNextBtn}
				<button className="cdp_i">{this.props.allPages}</button>
			</div>
        );
    }
}
