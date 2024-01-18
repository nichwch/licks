import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		label: string;
		options: string[];
		selection?: string | undefined | null;
		_class?: string | undefined;
		addLabelClasses?: string | undefined;
		labelClasses?: string | undefined;
		addWindowClasses?: string | undefined;
		windowClasses?: string | undefined;
		optionClasses?: string | undefined;
		selectedOptionClasses?: string | undefined;
		showChoiceInLabel?: boolean | undefined;
	};
	events: {
		selectionChanged: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type SingleSelectorPopupProps = typeof __propDef.props;
export type SingleSelectorPopupEvents = typeof __propDef.events;
export type SingleSelectorPopupSlots = typeof __propDef.slots;
export default class SingleSelectorPopup extends SvelteComponent<
	SingleSelectorPopupProps,
	SingleSelectorPopupEvents,
	SingleSelectorPopupSlots
> {}
export {};
