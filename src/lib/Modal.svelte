<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let showingWindow: boolean;
	afterUpdate(() => {
		if (showingWindow === true) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});
</script>

<svelte:body class:overflow-hidden={showingWindow} class:fixed={showingWindow} />
{#if showingWindow}
	<button
		class="fixed block top-0 left-0 w-full h-full z-40 bg-slate-500 bg-opacity-50"
		on:click={() => (showingWindow = false)}
	>
	</button>
	<div
		class="fixed block left-1/2 top-32 border border-black w-[26rem] ml-[-13rem] h-72 z-50 bg-white"
	>
		<div>
			<button class="float-right pr-1" on:click={() => (showingWindow = false)}>X</button>
		</div>
		<slot />
	</div>
{/if}
