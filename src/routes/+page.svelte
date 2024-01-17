<script>
	import BaseSelector from '../BaseSelector.svelte';
	import LabelAndPopup from '../LabelAndPopup.svelte';

	const languages = ['javascript', 'rust', 'go', 'python', 'zig'];
	let selectedLanguages = new Set();
	let showingLanguages = false;
</script>

<div class="w-full mt-10">
	<div class="w-96 mx-auto">
		<h1>Licks</h1>
		<div class="section">
			Some tasty riffs to reuse in your projects. By riffs, I mean Svelte components styled with
			TailwindCSS.
		</div>
		<div>By <a href="https://nicholaschen.io">Nicholas Chen</a></div>
		<div><a href="https://github.com/nichwch/licks">[github]</a></div>
	</div>
	<img class="block mx-auto w-[36rem]" alt="cool robotic guitar" src="./guitar.png" />
	<div class="w-96 mx-auto">
		<div>
			<h1>A label that shows a popup when you click it.</h1>
			<div class="flex flex-wrap">
				<LabelAndPopup>
					<svelte:fragment slot="buttonContent">more info</svelte:fragment>
					<svelte:fragment slot="windowContent">here is more information</svelte:fragment>
				</LabelAndPopup>
				<LabelAndPopup _class="ml-3" addLabelClasses="bg-green-300 hover:bg-green-400">
					<svelte:fragment slot="buttonContent">even more info</svelte:fragment>
					<svelte:fragment slot="windowContent"
						>the mitochondria is the powerhouse of the cell
					</svelte:fragment>
				</LabelAndPopup>
				<LabelAndPopup _class="ml-3" addLabelClasses="bg-blue-400 hover:bg-blue-500">
					<svelte:fragment slot="buttonContent">yet even more info</svelte:fragment>
					<svelte:fragment slot="windowContent"
						>the
						<LabelAndPopup addLabelClasses="bg-yellow-400 hover:bg-yellow-500">
							<svelte:fragment slot="buttonContent">mitochondria</svelte:fragment>
							<svelte:fragment slot="windowContent"
								>the mitochondria is the powerhouse of the cell. This is a bad UX pattern and you
								probably shouldn't implement it but it's fun to play with.
							</svelte:fragment>
						</LabelAndPopup>

						mitochondria is the powerhouse of the cell
					</svelte:fragment>
				</LabelAndPopup>
			</div>
		</div>
		<div class="section">
			<h1>A selector for things.</h1>
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
</div>
