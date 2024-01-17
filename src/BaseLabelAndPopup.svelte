<script lang="ts">
	import { clickOutside } from './clickOutside.js';

	export let isShowing: boolean;
	export let _class: string = '';
	export let addLabelClasses: string = '';
	export let labelClasses: string =
		'px-1 border border-black bg-red-300 hover:bg-red-400 transition-colors';
	export let addWindowClasses: string = '';
	export let windowClasses: string = 'border border-black bg-white p-3 shadow';
</script>

<div class="inline-block relative {_class}" use:clickOutside on:click_outside>
	<button on:click class="{labelClasses} {addLabelClasses}">
		<slot name="buttonContent" />
	</button>
	{#if isShowing}
		<div class="absolute z-50 {windowClasses} {addWindowClasses}">
			<slot name="windowContent" />
		</div>
	{/if}
</div>
