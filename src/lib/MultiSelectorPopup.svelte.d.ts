import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        options: string[];
        selectedOptions: Set<string>;
        _class?: string | undefined;
        addLabelClasses?: string | undefined;
        labelClasses?: string | undefined;
        addWindowClasses?: string | undefined;
        windowClasses?: string | undefined;
        optionClasses?: string | undefined;
        selectedOptionClasses?: string | undefined;
    };
    events: {
        selectionChanged: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MultiSelectorPopupProps = typeof __propDef.props;
export type MultiSelectorPopupEvents = typeof __propDef.events;
export type MultiSelectorPopupSlots = typeof __propDef.slots;
export default class MultiSelectorPopup extends SvelteComponent<MultiSelectorPopupProps, MultiSelectorPopupEvents, MultiSelectorPopupSlots> {
}
export {};
