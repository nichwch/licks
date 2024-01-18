import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        isShowing: boolean;
        _class?: string | undefined;
        addLabelClasses?: string | undefined;
        labelClasses?: string | undefined;
        addWindowClasses?: string | undefined;
        windowClasses?: string | undefined;
    };
    events: {
        click_outside: MouseEvent | UIEvent | Event | AnimationEvent | InputEvent | FocusEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        buttonContent: {};
        windowContent: {};
    };
};
export type BaseLabelAndPopupProps = typeof __propDef.props;
export type BaseLabelAndPopupEvents = typeof __propDef.events;
export type BaseLabelAndPopupSlots = typeof __propDef.slots;
export default class BaseLabelAndPopup extends SvelteComponent<BaseLabelAndPopupProps, BaseLabelAndPopupEvents, BaseLabelAndPopupSlots> {
}
export {};
