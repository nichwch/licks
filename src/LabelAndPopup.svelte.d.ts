import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        _class?: string | undefined;
        addLabelClasses?: string | undefined;
        labelClasses?: string | undefined;
        addWindowClasses?: string | undefined;
        windowClasses?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        buttonContent: {
            slot: string;
        };
        windowContent: {
            slot: string;
        };
    };
};
export type LabelAndPopupProps = typeof __propDef.props;
export type LabelAndPopupEvents = typeof __propDef.events;
export type LabelAndPopupSlots = typeof __propDef.slots;
export default class LabelAndPopup extends SvelteComponent<LabelAndPopupProps, LabelAndPopupEvents, LabelAndPopupSlots> {
}
export {};
