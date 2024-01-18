<script lang="ts">
	import SingleSelectorPopup from '$lib/SingleSelectorPopup.svelte';
	import MultiSelectorPopup from '$lib/MultiSelectorPopup.svelte';
	import LabelAndPopup from '$lib/LabelAndPopup.svelte';
	import MultiSelector from '$lib/MultiSelector.svelte';

	const languages = ['javascript', 'rust', 'go', 'python', 'zig'];
	let selectedLanguages: Set<string> = new Set();

	const lunchOptions = ['burger', 'spicy noodles', 'sandwich', 'tacos'];
	let selectedLunch: string | null = null;

	const tags = ['technical', 'social', 'politics', 'music', 'art', 'philosophy'];
	let selectedTags: Set<string> = new Set();

	const contentTypes = ['text', 'image', 'video'];
	let selectedContentType: string | null = null;
</script>

<div class="w-full mt-10 mb-36">
	<div class="w-96 mx-auto">
		<h1>Licks</h1>
		<div class="section">
			Some tasty riffs to reuse in your projects. By riffs, I mean Svelte components styled with
			TailwindCSS.
		</div>

		<button class="section font-mono bg-gray-200 rounded-sm px-1 inline-block">npm i licks</button>

		<div>By <a href="https://nicholaschen.io">Nicholas Chen</a></div>
		<div><a href="https://github.com/nichwch/licks">[github]</a></div>
	</div>
	<img class="block mx-auto w-[36rem]" alt="cool robotic guitar" src="./guitar.png" />
	<div class="w-96 mx-auto">
		<div class="section">
			<h3>A label that shows a popup when you click it</h3>
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
			<h3>A selector for selecting multiple things</h3>
			<div class="mb-2">
				Selected languages:
				{#each selectedLanguages as lang}
					<div class="inline-block box ml-2">
						{lang}
					</div>
				{/each}
			</div>
			<div class="p-1.5 border border-black">
				<MultiSelector options={languages} bind:selectedOptions={selectedLanguages} />
			</div>
		</div>
		<div class="section">
			<h3>A selector for selecting multiple things, in a popup</h3>
			<div class="mb-2">
				Selected languages:
				{#each selectedLanguages as lang}
					<div class="inline-block box ml-2">
						{lang}
					</div>
				{/each}
			</div>
			<MultiSelectorPopup
				label="languages"
				options={languages}
				bind:selectedOptions={selectedLanguages}
			/>
		</div>
		<div class="section">
			<h3>A selector for selecting a single thing</h3>
			<div>
				Lunch for today: {selectedLunch ? selectedLunch : 'TBA'}
			</div>
			<SingleSelectorPopup
				label="lunch options"
				options={lunchOptions}
				bind:selection={selectedLunch}
			/>
		</div>
		<div class="section">
			<h3>Composed together</h3>
			<LabelAndPopup addWindowClasses="w-72">
				<svelte:fragment slot="buttonContent">filters</svelte:fragment>
				<svelte:fragment slot="windowContent">
					<div class="flex">
						<MultiSelectorPopup label="tags" options={tags} bind:selectedOptions={selectedTags} />
						<SingleSelectorPopup
							_class="ml-3"
							label="content type"
							options={contentTypes}
							bind:selection={selectedContentType}
						/>
					</div>
				</svelte:fragment>
			</LabelAndPopup>
			<!-- <div>
				Showing content tagged {#each Array.from(selectedTags) as tag}
					<div class="box inline-block ml-2">{tag}</div>
				{/each} that is in {selectedContentType} form
			</div> -->
		</div>
	</div>
</div>
