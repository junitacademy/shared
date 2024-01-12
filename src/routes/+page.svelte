<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
</script>

<h1 class="p-2">Svelte Library</h1>
<table>
	<tr>
		<td>Header</td>
		<td><Header /></td>
	</tr>
</table>

<style>
	table {
		@apply w-full;
	}
    td{
        @apply p-2;
    }
	td:first-child {
		@apply w-24 text-center;
	}
</style>
