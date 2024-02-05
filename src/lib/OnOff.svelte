<script lang="ts">
	export let on: boolean = false;
</script>

<button
	on:click={() => (on = !on)}
	class:bg-gray-300={!on}
	class:bg-green-500={on}
	class=" box-content p-0 inline-flex bg-white w-7 h-5 border border-black transition-colors"
>
	<span
		class:ml-2={on}
		class:border-l={on}
		class:border-r={!on}
		class=" m-0 bg-white box-content inline-block w-5 h-5 border-black transition-all"
	></span></button
>
