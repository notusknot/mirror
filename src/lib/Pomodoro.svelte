<script lang="ts">
	//import { Confetti } from "svelte-confetti";
	let timerMinutes = 25;
	let breakMinutes = 5;
	let minutes = timerMinutes;
	let seconds = 0;
	let intervalId: number | null = null;
	let isBreak = false;
	let startTime: number | null = null;
	let isRunning = false;

	function startTimer() {
		isRunning = true;
		startTime = Date.now();
		intervalId = window.setInterval(() => {
			if (seconds === 0) {
				if (minutes === 0) {
					if (isBreak) {
						minutes = timerMinutes;
						isBreak = false;
					} else {
						minutes = breakMinutes;
						isBreak = true;
					}
					seconds = 59;
				} else {
					minutes--;
					seconds = 59;
				}
			} else {
				seconds--;
			}
		}, 1000);
	}

	function stopTimer() {
		isRunning = false;
		if (intervalId !== undefined && intervalId !== null) {
			clearInterval(intervalId);
		}
		minutes = timerMinutes;
		seconds = 0;
	}

	function handleTimerMinutesChange(event: Event) {
		const target = event.target as HTMLInputElement;
		timerMinutes = +target.value;
		minutes = timerMinutes;
	}

	function handleBreakMinutesChange(event: Event) {
		const target = event.target as HTMLInputElement;
		breakMinutes = +target.value;
	}
</script>

<div>
	<!--
	{#if getElapsedTime() === 0}
		<Confetti y={[-0.5, 0.5]} x={[-0.5, 0.5]} />
	{/if}
-->

	<div class="timer-container">
		<p class="timer-label">{isBreak ? "Break" : "Work"}</p>
		<p class="timer-time">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
	</div>

	{#if !isRunning}
		<div class="input-container">
			<label for="timer-minutes">Timer Minutes:</label>
			<input
				type="number"
				id="timer-minutes"
				bind:value={timerMinutes}
				on:input={handleTimerMinutesChange}
			/>
		</div>

		<div class="input-container">
			<label for="break-minutes">Break Minutes:</label>
			<input
				type="number"
				id="break-minutes"
				bind:value={breakMinutes}
				on:input={handleBreakMinutesChange}
			/>
		</div>

		<button on:click={startTimer}>Start</button>
	{:else}
		<button on:click={stopTimer}>Stop</button>
	{/if}
</div>

<style>
	.timer-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.timer-label {
		font-size: 1.2em;
		font-weight: bold;
	}

	.timer-time {
		font-size: 2em;
		font-weight: bold;
	}

	.input-container {
		display: flex;
		align-items: center;
		margin: 10px 0;
	}

	label {
		margin-right: 10px;
	}
</style>
