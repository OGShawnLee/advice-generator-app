<script>
	import 'virtual:windi.css';
</script>

<slot />

<style>
	:global(button:hover) {
		--tw-shadow-color: hsl(150, 100%, 66%, 50%);
		box-shadow: 0px 0px 30px 5px var(--tw-shadow-color);
		@apply hover:(scale-110 duration-150 rotate-180);
	}
</style>
