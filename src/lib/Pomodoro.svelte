<script lang="ts">
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
			if (seconds !== 0) {
				seconds--;
				return;
			}

			if (minutes !== 0) {
				minutes--;
				seconds = 59;
				return;
			}

			if (isBreak) {
				minutes = timerMinutes;
				isBreak = false;
			} else {
				minutes = breakMinutes;
				isBreak = true;
			}

			seconds = 59;
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

<div class="pomodoro">
	<div>
		<p>{isBreak ? "Break" : "Work"}</p>
		<p>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
	</div>

	{#if !isRunning}
		<label for="timer-minutes">Timer Minutes:</label>
		<input
			type="number"
			id="timer-minutes"
			bind:value={timerMinutes}
			on:input={handleTimerMinutesChange}
		/>

		<label for="break-minutes">Break Minutes:</label>
		<input
			type="number"
			id="break-minutes"
			bind:value={breakMinutes}
			on:input={handleBreakMinutesChange}
		/>

		<button on:click={startTimer}>Start</button>
	{:else}
		<button on:click={stopTimer}>Stop</button>
	{/if}
</div>

<style>

	input {
		width: calc(4ch + var(--padding));
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	input[type="number"] {
		-moz-appearance: textfield; /* Firefox */
	}
</style>
