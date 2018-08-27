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
		const pageNum = parseInt(e.target.innerText, 10)
		const lastPage = (pageNum === totalPages)
        helper
            .setPage(pageNum -1).search()

		// console.clear()
		// console.log(pageNum)
		this.setState({
			currentPage: pageNum,
			allPages: totalPages,
			hasPrevButton: pageNum !== 1,
			hasNextButton: !lastPage
		})

        helper
            .setPage(pageNum -1).search()

	}
	
	onPrevButtonClick(e, page) {
		const helper = this.props.helper
		this.setState({
			currentPage: page -1,
			hasPrevButton: page -1 !== 1,
			hasNextButton: true
		})
		helper.setPage(page).previousPage().search()
	}

	onNextButtonClick(e, page, totalPages) {
		const helper = this.props.helper
		const lastPage = (page -1 === totalPages)
		
		this.setState({
			currentPage: page -1,
			hasPrevButton: true,
			hasNextButton: !lastPage
		})
		if(!lastPage){
			helper.setPage(page -1).nextPage().search()
		}
	}
	

    render() {
		const maxPages = this.props.allPages 
		var N = Array.apply(null, {length: maxPages}).map(Number.call, Number)
		let currPage = this.props.currentPage
  
		const renderpages = N.map((item, index) => {
			let isCurrentPage = (index +1 === currPage) ? 'pagination_i active' : 'pagination_i'
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
		if (this.state.hasPrevButton && (this.state.allPages !== 0 || this.state.currentPage !== 0)) {
			renderPrevBtn = 
			<button 
				className="pagination_i"
				onClick={(e) => this.onPrevButtonClick(e, this.props.currentPage -1)}>
				&lsaquo;
			</button>
		} 

		let renderNextBtn = null;
		if(this.state.hasNextButton && (this.state.allPages !== 0 || this.state.allPages > this.state.currentPage)) {
			renderNextBtn = 
			<button 
				className="pagination_i"
				onClick={(e) => this.onNextButtonClick(e, this.props.currentPage, maxPages)}>
				&rsaquo;
			</button>
		}

		return (
			<div className="pagination" actpage="1">
					{renderPrevBtn}
					{renderpages}
					{renderNextBtn}
			</div>
        );
    }
}
