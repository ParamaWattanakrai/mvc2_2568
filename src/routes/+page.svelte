<script>
    import { ViewHelper } from '$lib/views/view.js';
    export let data;
</script>

<h1>Rumor Tracking System</h1>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Current Status</th>
            <th>Verified Result</th> <th>Reports</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each data.rumors as rumor}
            <tr>
                <td>{rumor.id}</td>
                <td>{rumor.topic}</td>
                <td style={ViewHelper.getStatusStyle(rumor.status)}>
                    {ViewHelper.formatStatus(rumor.status)}
                </td>
                <td>
                    {#if rumor.status === 'Real'}
                        <span style="color: green; font-weight: bold;">✅ Verified Real</span>
                    {:else if rumor.status === 'Fake'}
                        <span style="color: purple; font-weight: bold;">❌ Verified Fake</span>
                    {:else}
                        <span style="color: #999;">Pending...</span>
                    {/if}
                </td>
                <td>{rumor.reports.length}</td>
                <td><a href="/rumor/{rumor.id}">View Details</a></td>
            </tr>
        {/each}
    </tbody>
</table>

<p><a href="/summary">View Summary Report (Panic List)</a></p>