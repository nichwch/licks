<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from './clickOutside.js';

	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;
	export let isShowing: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="relative" use:clickOutside on:click_outside>
	<button on:click>
		{label}
	</button>
	{#if isShowing}
		<div class="relative">
			{#each options as option}<button
					class:underline={selectedOptions.has(option)}
					on:click={() => dispatch('optionClick', { option })}>{option}</button
				>{/each}
		</div>
	{/if}
</div>
