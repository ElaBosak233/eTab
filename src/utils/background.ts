export function changeBackgroundImage(img: string) {
	if (img) {
		document.body.style.backgroundImage = `url(${img})`;
	} else {
		document.body.className = "bg-slate-900";
	}
}

export function defaultBackground() {
	document.body.className = "bg-slate-900";
}
