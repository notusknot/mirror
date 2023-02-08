<script lang="ts">
	export let className: string;

	let timerMinutes: number = 25;
	let breakMinutes: number = 5;
	let minutes: number = timerMinutes;
	let seconds: number = 0;
	let intervalId: number | undefined;
	let isBreak: boolean = false;
	let startTime: number | undefined;
	let isRunning: boolean = false;

	function startTimer() {
		isRunning = true;
		startTime = Date.now();
		intervalId = setInterval(() => {
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
		clearInterval(intervalId!);
		minutes = timerMinutes;
		seconds = 0;
	}

	function handleTimerMinutesChange(event: any) {
		timerMinutes = +event.target.value;
		minutes = timerMinutes;
	}

	function handleBreakMinutesChange(event: any) {
		breakMinutes = +event.target.value;
	}

	function getElapsedTime() {
		if (startTime === undefined) {
			return 0;
		}
		return (Date.now() - startTime) / 1000;
	}
</script>

<div class={className}>
  <div class="timer-container">
    <p class="timer-label">{isBreak ? 'Break' : 'Work'}</p>
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
<button on:click={stopTimer}>Stop</button>

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
    margin: var(--padding) 0;
  }

  label {
    margin-right: var(--padding);
  }
</style>

