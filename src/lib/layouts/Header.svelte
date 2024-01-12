<script lang="ts">
	import { page } from '$app/stores';
	export let title = 'App Title';
	export let menu: { title: string; href: string }[] = [
		{
			title: 'Item 1',
			href: '/item-1'
		},
		{
			title: 'Item 2',
			href: '/item-2'
		}
	];
</script>

<header class="bg-gray-300">
	<nav class="flex">
		<a href="/" class="font-semibold">{title}</a>
		<span class="flex-1"></span>
		<ul class="flex">
			{#each menu as item}
				<li class="flex">
					<a
						href={item.href}
						class:opacity-60={$page.url.pathname != '/'}
						class:active={$page.url.pathname == item.href}>{item.title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	a {
		@apply border-y-2 border-transparent p-2 md:p-4;
	}
	a.active {
		@apply border-b-current opacity-100;
	}
</style>
