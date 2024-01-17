<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from './clickOutside.js';

	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;
	export let isShowing: boolean;
	export let labelClasses: string = 'bg-red-300 hover:bg-red-400 transition-colors';
	export let windowClasses: string = 'border border-black bg-white p-3 shadow';
	export let optionClasses: string =
		'px-1 border border-black bg-red-200 hover:bg-red-300 transition-colors mr-3';
	const dispatch = createEventDispatcher();
</script>

<div class="relative" use:clickOutside on:click_outside>
	<button on:click class="px-1 border border-black {labelClasses}">
		{label}
	</button>
	{#if isShowing}
		<div class="relative {windowClasses}">
			{#each options as option}<button
					class:underline={selectedOptions.has(option)}
					class={optionClasses}
					on:click={() => dispatch('optionClick', { option })}>{option}</button
				>{/each}
		</div>
	{/if}
</div>
