// from: https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

/** Dispatch event on click outside of node */
export function clickOutside(node: EventTarget) {
	const handleClick = (event: MouseEvent) => {
		if (!event.target) return;
		if (node && !(node as HTMLElement).contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
