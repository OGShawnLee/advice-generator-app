<script lang="ts">
	export let id: number;
	export let advice: string;
</script>

<svelte:head>
	<title>Frontend Mentor | Advice Generator App</title>
</svelte:head>

<main>
	<div
		class="relative max-w-xs sm:max-w-xl p-6 | flex flex-col items-center gap-4 | bg-slate-700 rounded-xl shadow-lg"
	>
		<h1 class="mt-4 mb-2.5 | text-xs text-crayola uppercase tracking-[3px]">Advice #{id}</h1>
		<p class="font-bold text-2xl sm:(text-[28px] leading-9) text-center">
			"{advice}"
		</p>
		<picture class="block mt-3 my-6">
			<source srcset="/pattern-divider-desktop.svg" media="(min-width: 640px)" />
			<source srcset="/pattern-divider-mobile.svg" media="(max-width: 640px)" />
			<img src="/pattern-divider-mobile.svg" alt="" />
		</picture>
		<form action="/" method="get">
			<label class="sr-only" id="button-advice-label" for="button-advice">
				Request a new advice
			</label>
			<button
				class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-14 w-14 min-w-14 | grid place-content-center | bg-crayola rounded-full"
				type="submit"
				id="button-advice"
				aria-labelledby="button-advice-label"
			>
				<img src="/icon-dice.svg" alt="dice icon" />
			</button>
		</form>
	</div>
</main>
