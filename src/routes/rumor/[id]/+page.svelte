<script>
    import { ViewHelper } from '$lib/views/view.js';
    export let data;
    export let form;
</script>

<h2>Details for: {data.rumor.topic}</h2>
<p>Status: {ViewHelper.formatStatus(data.rumor.status)} [cite: 26]</p>
<p>Total Reports: {data.rumor.reports.length} [cite: 26]</p>

{#if form?.error}<p style="color: red;">{form.error}</p>{/if}

<form method="POST">
    <input type="hidden" name="rumorId" value={data.rumor.id}>
    <input type="text" name="userId" placeholder="Enter User ID (e.g., U001)" required>
    <select name="type">
        <option value="Distorted">Distorted</option>
        <option value="Incite">Incite</option>
        <option value="Fake">Fake</option>
    </select>
    <button type="submit">Submit Report</button>
</form>
<a href="/">Back to Home</a>