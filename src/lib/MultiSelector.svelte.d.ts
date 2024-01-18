import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        options: string[];
        selectedOptions: Set<string>;
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
export type MultiSelectorProps = typeof __propDef.props;
export type MultiSelectorEvents = typeof __propDef.events;
export type MultiSelectorSlots = typeof __propDef.slots;
export default class MultiSelector extends SvelteComponent<MultiSelectorProps, MultiSelectorEvents, MultiSelectorSlots> {
}
export {};
