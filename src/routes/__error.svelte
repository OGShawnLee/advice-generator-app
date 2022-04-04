<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = (res) => {
		return {
			props: { error: res.error, status: res.status }
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let error: Error & { frame?: string } & { loc?: object };
</script>

<main>
	<div
		class="relative max-w-xs px-6 pt-6 pb-12 | flex flex-col items-center gap-6 | bg-slate-700 rounded-xl shadow-lg"
	>
		<h1 class="text-xs text-crayola uppercase tracking-[3px]">Uff!</h1>
		<p class="text-sm text-center">
			What went wrong with that thing?
			<span class="font-bold text-2xl sm:(text-[28px] leading-9) text-center">
				{error.message}
			</span>
		</p>
		<picture class="block">
			<source srcset="/pattern-divider-desktop.svg" media="(min-width: 640px)" />
			<source srcset="/pattern-divider-mobile.svg" media="(max-width: 640px)" />
			<img src="/pattern-divider-mobile.svg" alt="" />
		</picture>
		<form action="/" method="get">
			<button
				class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-14 w-14 min-w-14 | grid place-content-center | bg-crayola rounded-full"
				type="submit"
			>
				<img src="/icon-dice.svg" alt="dice icon" />
			</button>
		</form>
	</div>
</main>

<style>
	button:hover {
		--tw-shadow-color: hsl(150, 100%, 66%, 50%);
		box-shadow: 0px 0px 30px 5px var(--tw-shadow-color);
		@apply hover:(scale-110 duration-150 rotate-180);
	}
</style>
