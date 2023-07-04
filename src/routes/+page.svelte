<script lang="ts">
	import Mcq from '$lib/components/Mcq.svelte';
	import type { MCQ } from '$lib/models/mcq.js';

	let mcq: MCQ = {
		question: {
			content: '<p>This is sample question.</p>'
		},
		options: [
			{
				content: '<p>Option 1</p>'
			},
			{
				content: '<p>Option 2</p>',
				isCorrect: true
			}
		],
		solution: {
			content: '<p>This is Sample Solution.</p>'
		}
	};
</script>

<Mcq {mcq} />
