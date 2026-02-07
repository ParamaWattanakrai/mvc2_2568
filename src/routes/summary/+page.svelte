<script>
    import { ViewHelper } from '$lib/views/view.js';
    export let data;
    
    const panicRumors = data.rumors.filter(r => r.status === 'Panic');
    const verifiedRumors = data.rumors.filter(r => r.status === 'Real' || r.status === 'Fake');
</script>

<h1>Summary Report</h1>

<h2>⚠️ Panic Status</h2>
{#if panicRumors.length > 0}
    <ul>
        {#each panicRumors as rumor}
            <li>{rumor.topic} ({rumor.reports.length} reports)</li>
        {/each}
    </ul>
{:else}
    <p>No rumors are currently in panic status.</p>
{/if}

<hr />

<h2>✅ Verified Information</h2>
<ul>
    {#each verifiedRumors as rumor}
        <li>{rumor.topic}: <strong>{rumor.status}</strong></li>
    {/each}
</ul>

<a href="/">Back to Home</a>