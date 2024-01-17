<script lang="ts">
	import MultiSelector from '../MultiSelector.svelte';
	import SingleSelector from '../SingleSelector.svelte';
	import LabelAndPopup from '../LabelAndPopup.svelte';
	import { fromJSON } from 'postcss';

	const languages = ['javascript', 'rust', 'go', 'python', 'zig'];
	let selectedLanguages: string[] = [];

	const lunchOptions = ['burger', 'spicy noodles', 'sandwich', 'tacos'];
	let selectedLunch: string | null = null;
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
		<div class="section">
			<h3>A label that shows a popup when you click it.</h3>
			<div class="flex flex-wrap">
				<LabelAndPopup addWindowClasses="w-72">
					<svelte:fragment slot="buttonContent">more info</svelte:fragment>
					<svelte:fragment slot="windowContent">here is more information</svelte:fragment>
				</LabelAndPopup>
				<LabelAndPopup
					_class="ml-3"
					addWindowClasses="w-72"
					addLabelClasses="!bg-green-300 hover:!bg-green-400"
				>
					<svelte:fragment slot="buttonContent">even more info</svelte:fragment>
					<svelte:fragment slot="windowContent"
						>the mitochondria is the powerhouse of the cell
					</svelte:fragment>
				</LabelAndPopup>
				<LabelAndPopup
					_class="ml-3"
					addWindowClasses="w-72"
					addLabelClasses="!bg-blue-400 hover:!bg-blue-500"
				>
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
			<h3>A selector for selecting multiple things.</h3>
			<div class="mb-2">
				Selected languages:
				{#each selectedLanguages as lang}
					<div class="inline-block box bg-red-200 ml-2">
						{lang}
					</div>
				{/each}
			</div>
			<MultiSelector
				label="languages"
				options={languages}
				on:selectionChanged={(event) =>
					(selectedLanguages = Array.from(event.detail.selectedOptions))}
			/>
		</div>
		<div class="section">
			<h3>A selector for selecting a single thing.</h3>
			<div>
				Lunch for today: {selectedLunch ? selectedLunch : 'TBA'}
			</div>
			<SingleSelector
				label="lunch options"
				options={lunchOptions}
				on:selectionChanged={(event) => (selectedLunch = event.detail.selectedOption)}
			/>
		</div>
	</div>
</div>
