<script lang="ts">
	import LabelAndPopup from './BaseLabelAndPopup.svelte';

	export let _class: string = '';
	export let addLabelClasses = '';
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses = '';
	export let windowClasses: string | undefined = undefined;
	let isShowing = false;
</script>

<LabelAndPopup
	{_class}
	{isShowing}
	{addLabelClasses}
	{labelClasses}
	{addWindowClasses}
	{windowClasses}
	on:click_outside={() => (isShowing = false)}
	on:click={() => (isShowing = !isShowing)}
>
	<slot name="buttonContent" slot="buttonContent" />
	<slot name="windowContent" slot="windowContent" />
</LabelAndPopup>
