<script>
    import { ViewHelper } from '$lib/views/view.js';
    
    export let data;
    export let form;

    $: rumor = data.rumor;
</script>

<nav>
    <a href="/">← กลับสู่หน้าหลัก (Back to Main List)</a>
</nav>

{#if !rumor}
    <h1>ไม่พบข้อมูลข่าวลือ</h1>
{:else}
    <header>
        <h1>{rumor.topic}</h1>
        <p><strong>รหัสข่าวลือ:</strong> {rumor.id}</p>
        <p><strong>สถานะ:</strong> {ViewHelper.formatStatus(rumor.status)}</p>
    </header>

    <section>
        <h3>ข้อมูลข่าวลือ</h3>
        <ul>
            <li><strong>แหล่งที่มา:</strong> {rumor.source}</li>
            <li><strong>วันที่สร้าง:</strong> {rumor.date}</li>
            <li><strong>คะแนนความน่าเชื่อถือ:</strong> {rumor.score}/100</li>
            <li><strong>จำนวนการรายงาน:</strong> {rumor.reports.length}</li>
        </ul>
    </section>

    <hr />

    <section>
        <h3>แจ้งเบาะแสข่าวลือ (สำหรับผู้ใช้ทั่วไป)</h3>
        
        {#if rumor.status === 'Real' || rumor.status === 'Fake'}
            <p style="color: orange;"><strong>ประกาศ:</strong> ข่าวลือนี้ถูกตรวจสอบแล้ว ไม่สามารถแจ้งรายงานเพิ่มได้</p>
        {:else}
            {#if form?.success && !form?.statusChanged}
                <p style="color: green;">บันทึกการรายงานเรียบร้อยแล้ว</p>
            {/if}
            
            {#if form?.error}
                <p style="color: red;">ข้อผิดพลาด: {form.error}</p>
            {/if}

            <form method="POST">
                <input type="hidden" name="rumorId" value={rumor.id}>
                <input type="hidden" name="actionType" value="report">
                
                <label>
                    รหัสผู้ใช้งาน (User ID):
                    <input type="text" name="userId" placeholder="เช่น U001" required>
                </label>

                <label>
                    ประเภทรายงาน:
                    <select name="type">
                        <option value="Distorted">บิดเบือน (Distorted)</option>
                        <option value="Incite">ปลุกปั่น (Incite)</option>
                        <option value="Fake">ข้อมูลเท็จ (Fake News)</option>
                    </select>
                </label>

                <label>
                    หมายเหตุ (Note):
                    <textarea name="note" placeholder="รายละเอียดเพิ่มเติม..." rows="3"></textarea>
                </label>

                <button type="submit">ส่งรายงาน</button>
            </form>
        {/if}
    </section>

    <hr />

    <section style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">
        <h3>การตรวจสอบข้อเท็จจริง (สำหรับผู้ตรวจสอบ)</h3>
        
        {#if form?.success && form?.statusChanged}
            <p style="color: blue;">อัปเดตสถานะการตรวจสอบเรียบร้อยแล้ว</p>
        {/if}

        <form method="POST">
            <input type="hidden" name="rumorId" value={rumor.id}>
            <input type="hidden" name="actionType" value="verify">
            
            <label>
                รหัสผู้ตรวจสอบ (Verifier ID):
                <input type="text" name="userId" placeholder="เช่น U002" required>
            </label>

            <label>
                ระบุผลการตรวจสอบ:
                <select name="newStatus">
                    <option value="Real">ตรวจสอบแล้ว: ข่าวจริง (Real)</option>
                    <option value="Fake">ตรวจสอบแล้ว: ข่าวปลอม (Fake)</option>
                    <option value="Normal">คืนค่าเป็นสถานะปกติ (Normal)</option>
                </select>
            </label>

            <button type="submit" style="cursor:pointer;">ยืนยันผลการตรวจสอบ</button>
        </form>
    </section>

    <hr />

    <section>
        <h3>ประวัติการรายงานและหมายเหตุ</h3>
        {#if rumor.reports.length > 0}
            <ul>
                {#each rumor.reports as report}
                    <li>
                        <strong>[{ViewHelper.getLabel(report.type)}]</strong> 
                        โดยผู้ใช้: {report.reporterId}
                        {#if report.note}
                            <p style="margin-left: 20px; color: #666;">- {report.note}</p>
                        {/if}
                    </li>
                {/each}
            </ul>
        {:else}
            <p>ยังไม่มีการรายงานสำหรับข่าวนี้</p>
        {/if}
    </section>
{/if}