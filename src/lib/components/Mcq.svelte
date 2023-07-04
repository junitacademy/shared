<script lang="ts">
	import type { MCQ } from '$lib/models/mcq.js';

	export let mcq: MCQ;
</script>

<div class="multiple-choice-question">
	<div class="question">
		{@html mcq.question.content}
	</div>
	<div class="options">
		{#each mcq.options as option}
			<div on:click={() => console.log(option)} class="option">
				{@html option.content}
			</div>
		{/each}
	</div>
	<div class="solution">
		{@html mcq.solution.content}
	</div>
</div>
