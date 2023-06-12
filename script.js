const article = document.querySelector('article');
const COUNT = 4992;
article.oninput = () => {
	const isFilled = article.classList.contains('filled');
	const isOverfilled = article.classList.contains('overfilled');

	if(article.textContent.length === COUNT) article.classList.add('filled');
	else if (isFilled) article.classList.remove('filled');

	if(article.textContent.length > COUNT) article.classList.add('overfilled');
	else if (isOverfilled) article.classList.remove('overfilled');
};
