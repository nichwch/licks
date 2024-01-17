<script lang="ts">
	import LabelAndPopup from './BaseLabelAndPopup.svelte';

	export let _class: string = '';
	export let labelClasses: string = 'bg-red-300 hover:bg-red-400 transition-colors';
	export let windowClasses: string = 'border border-black bg-white p-3 shadow';
	let isShowing = false;
</script>

<LabelAndPopup
	{_class}
	{isShowing}
	on:click_outside={() => (isShowing = false)}
	on:click={() => (isShowing = !isShowing)}
>
	<slot name="buttonContent" slot="buttonContent" />
	<slot name="windowContent" slot="windowContent" />
</LabelAndPopup>
