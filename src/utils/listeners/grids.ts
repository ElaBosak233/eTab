export default function () {
	(document.querySelector("div[id='gridsArea']") as HTMLDivElement).style.position = "fixed";
	(document.querySelector("div[id='gridsArea']") as HTMLDivElement).style.transform = `translateX(-50%)`;
	(document.querySelector("div[id='gridsArea']") as HTMLDivElement).style.top = `${0.25 * 100}%`;
	(document.querySelector("div[id='gridsArea']") as HTMLDivElement).style.left = `${0.5 * 100}%`;
}
