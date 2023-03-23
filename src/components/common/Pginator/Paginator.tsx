import React, {useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
	totalUsersCount: number
	currentPage: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	portionSize: number
}

const Paginator = ({currentPage, pageSize, onPageChanged, totalUsersCount, portionSize}: PaginatorPropsType) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={s.pages}>
			{portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p, index) => {
					return <a key={index} onClick={() => {
						onPageChanged(p)
					}} className={currentPage === p ? s.selectedPage : ''}>{p}</a>
				})}
			{portionCount > portionNumber &&
          <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
			}
		</div>
	);
};

export default Paginator;