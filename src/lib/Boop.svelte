<script>
	let clicked = false;
	let timeoutId = 0;
	const onClick = () => {
		clicked = !clicked;
		timeoutId++;
		const tId = timeoutId;
		setTimeout(() => {
			// cancel timeout if new was set
			if (tId === timeoutId) clicked = false;
		}, 1000);
	};
</script>

<span
	class={`boop${clicked ? " wiggle" : ""}`}
	class:active={clicked}
	on:keypress={onClick}
	on:click={onClick}
	on:mouseenter={onClick}
	style="--animation: boop"
>
	<slot />
</span>

<style>
	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-15deg);
		}
		40% {
			transform: rotate(15deg);
		}
		60% {
			transform: rotate(-7deg);
		}
		80% {
			transform: rotate(7deg);
		}
		90% {
			transform: rotate(-3deg);
		}
		95% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.boop {
		display: inline-block;
		will-change: transform;
		max-height: 32px;
	}
	.boop.active {
		animation-duration: 1s;
		animation-play-state: paused;
		animation-fill-mode: forwards;
	}
	.boop.wiggle {
		animation-name: wiggle;
		animation-play-state: running;
	}
</style>
