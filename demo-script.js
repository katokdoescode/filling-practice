const article = document.querySelector('article');
window.count = 4992;

article.oninput = () => {
	const count = window.count;
	const isFilled = article.classList.contains('filled');
	const isOverfilled = article.classList.contains('overfilled');

	if(article.innerText.length === count) article.classList.add('filled');
	else if (isFilled) article.classList.remove('filled');

	if(article.innerText.length > count) article.classList.add('overfilled');
	else if (isOverfilled) article.classList.remove('overfilled');
};

const handleSubmit = (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);
	const objectData = Object.fromEntries(formData);
	const { letters } = objectData;
	window.count = Number(letters);

	const savedMessage = document.getElementById('saved');
	showMessage(savedMessage, 2000);
}

const showMessage = (target, timeout) => {
	target.hidden = false;
	setTimeout(() => (target.hidden = true), timeout)
}
