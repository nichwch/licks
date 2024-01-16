<script>
	import BaseSelector from '../BaseSelector.svelte';

	const languages = ['javascript', 'rust', 'go', 'python', 'zig'];
	let selectedLanguages = new Set();
	let showingLanguages = false;
</script>

<div class="w-96 mx-auto mt-10">
	<BaseSelector
		label="languages"
		options={languages}
		selectedOptions={selectedLanguages}
		isShowing={showingLanguages}
		on:click={() => {
			showingLanguages = !showingLanguages;
		}}
		on:optionClick={(event) => {
			const { option } = event.detail;
			console.log(event.detail);
			if (selectedLanguages.has(option)) selectedLanguages.delete(option);
			else selectedLanguages.add(option);
			selectedLanguages = selectedLanguages;
		}}
		on:click_outside={() => {
			showingLanguages = false;
		}}
	/>
</div>
