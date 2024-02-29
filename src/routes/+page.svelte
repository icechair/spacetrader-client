<script>
    const text = "page"

    /** @type {import("./$types").PageData} */
    export let data;
</script>

<h1>Hello {text}!</h1>
{#if data.error}
    <h2>we have an error</h2>
{:else}
    <h2>{data.payload.status}</h2>
{/if}

