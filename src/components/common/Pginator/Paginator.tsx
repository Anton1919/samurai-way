import React from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
	totalUsersCount: number
	currentPage: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
}

const Paginator = ({currentPage, pageSize, onPageChanged, totalUsersCount}: PaginatorPropsType) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pages = []

	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}

	return (
		<div className={s.pages}>
			{pages.map((p, index) => {
				return <a key={index} onClick={() => {
					onPageChanged(p)
				}} className={currentPage === p ? s.selectedPage : ''}>{p}</a>
			})}
		</div>

	);
};

export default Paginator;