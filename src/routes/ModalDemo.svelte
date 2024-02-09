<script lang="ts">
	import { Modal } from '$lib';
	let showingWindow = false;
</script>

<div class="section">
	<h3>Modal</h3>
	<button
		class="border border-black bg-red-300 hover:bg-red-400 transition-colors px-1"
		on:click={() => (showingWindow = true)}>show modal</button
	>
	<Modal bind:showingWindow><div class="p-3">Modal content.</div></Modal>
</div>
