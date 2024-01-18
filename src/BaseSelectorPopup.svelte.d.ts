import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        options: string[];
        selectedOptions: Set<string>;
        isShowing: boolean;
        _class?: string | undefined;
        addLabelClasses?: string | undefined;
        labelClasses?: string | undefined;
        addWindowClasses?: string | undefined;
        windowClasses?: string | undefined;
        optionClasses?: string | undefined;
        selectedOptionClasses?: string | undefined;
    };
    events: {
        click_outside: MouseEvent | UIEvent | Event | AnimationEvent | InputEvent | FocusEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        click: MouseEvent;
        optionClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BaseSelectorPopupProps = typeof __propDef.props;
export type BaseSelectorPopupEvents = typeof __propDef.events;
export type BaseSelectorPopupSlots = typeof __propDef.slots;
export default class BaseSelectorPopup extends SvelteComponent<BaseSelectorPopupProps, BaseSelectorPopupEvents, BaseSelectorPopupSlots> {
}
export {};
