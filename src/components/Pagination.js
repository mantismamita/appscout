import React, { Component } from 'react';

export default class Pagination extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  	currentPage: this.props.page,
			allPages: this.props.allPages,
		  	hasPrevButton: false,
		  	hasNextButton: this.props.currentPage !== this.props.allPages
		}
	}

	onButtonClick(e, totalPages) {
		const helper = this.props.helper
		const pageNum = parseInt(e.target.innerText)
		const lastPage = (pageNum === totalPages)
        helper
            .setPage(pageNum -1).search()

		console.clear()
		console.log(pageNum)
		this.setState({
			currentPage: pageNum,
			hasPrevButton: pageNum !== 1,
			hasNextButton: !lastPage
		})

        helper
            .setPage(pageNum -1).search()

	}
	
	onPrevButtonClick(e, page) {
		const helper = this.props.helper
        helper.setPage(page).previousPage().search()

		console.log(page)
		this.setState({
			currentPage: page -1
		})
	}
	

    render() {
		const maxPages = this.props.allPages 
		var N = Array.apply(null, {length: maxPages}).map(Number.call, Number)
		let currPage = this.props.currentPage
  
		const renderpages = N.map((item, index) => {
			let isCurrentPage = (index +1 === currPage) ? 'cdp_i active' : 'cdp_i'
			return (
				<button 
					className={ isCurrentPage } 
					key={index} 
					onClick={(e) => this.onButtonClick(e, maxPages)}>
					{ index + 1 }
				</button>
			)
		})

		let renderPrevBtn = null;
		if (this.state.hasPrevButton) {
			renderPrevBtn = 
			<button 
				className="cdp_i"
				onClick={(e) => this.onPrevButtonClick(e, this.props.currentPage -1)}>
				&lsaquo;
			</button>
		} 

		let renderNextBtn = null;
		if(this.state.hasNextButton !== false) {
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
			</div>
        );
    }
}
