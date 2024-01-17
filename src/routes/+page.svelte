<script>
	import BaseSelector from '../BaseSelector.svelte';

	const languages = ['javascript', 'rust', 'go', 'python', 'zig'];
	let selectedLanguages = new Set();
	let showingLanguages = false;
</script>

<div class="w-full mt-10">
	<div class="w-96 mx-auto">
		<h1>Licks</h1>
		<div>
			Some tasty riffs to reuse in your projects. By <a href="https://nicholaschen.io"
				>Nicholas Chen</a
			>
		</div>
	</div>
	<img class="block mx-auto w-[36rem]" alt="cool robotic guitar" src="./guitar.png" />
	<div class="w-96 mx-auto">
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
</div>
