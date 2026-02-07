export let db = {
    rumours: [
        { 
            id: 10203040, 
            topic: "วิกฤตขาดแคลนน้ำในกรุงเทพฯ", 
            source: "Twitter", 
            date: "2026-02-07", 
            score: 85, 
            status: "Normal", 
            reports: [] 
        },
        { 
            id: 55667788, 
            topic: "ประกาศวันหยุดราชการเพิ่มเติมสัปดาห์หน้า", 
            source: "Facebook", 
            date: "2026-02-06", 
            score: 40, 
            status: "Normal", 
            reports: [
                { reporterId: "U001", type: "Fake", date: "2026-02-07T08:00:00Z", note: "เพจหลักของรัฐบาลยังไม่ได้ลงข้อมูลนี้เลยครับ" }
            ] 
        },
        { 
            id: 11223344, 
            topic: "ไฟไหม้โรงงานผลิตชิป TSMC", 
            source: "LINE", 
            date: "2026-02-07", 
            score: 90, 
            status: "Panic", 
            reports: [
                { reporterId: "U003", type: "Incite", date: "2026-02-07T09:00:00Z", note: "ทำให้คนตกใจและเริ่มกักตุนสินค้าไอที" },
                { reporterId: "U004", type: "Fake", date: "2026-02-07T09:05:00Z", note: "รูปภาพที่ใช้เป็นเหตุการณ์เก่าจากปี 2021" },
                { reporterId: "U005", type: "Distorted", date: "2026-02-07T09:10:00Z", note: "เป็นเพียงการซ้อมดับเพลิงย่อย ไม่ใช่ไฟไหม้จริง" },
                { reporterId: "U006", type: "Fake", date: "2026-02-07T09:15:00Z", note: "ตรวจสอบข่าวจากเว็บทางการของ TSMC แล้วไม่พบข้อมูล" },
                { reporterId: "U008", type: "Incite", date: "2026-02-07T09:20:00Z", note: "ข้อมูลนี้ทำให้หุ้นกลุ่มเทคโนโลยีร่วงหนัก" }
            ] 
        },
        { 
            id: 99887766, 
            topic: "ปั๊ม PTT แจกน้ำมันฟรีฉลองครบรอบ", 
            source: "TikTok", 
            date: "2026-02-05", 
            score: 15, 
            status: "Normal", 
            reports: [
                { reporterId: "U009", type: "Fake", date: "2026-02-07T10:00:00Z", note: "ไปที่ปั๊มมาแล้ว พนักงานบอกว่าเป็นข่าวปลอม" },
                { reporterId: "U010", type: "Distorted", date: "2026-02-07T10:15:00Z", note: "จริงๆ เป็นแค่ส่วนลด 1 บาท ไม่ใช่แจกฟรี" }
            ] 
        },
        { 
            id: 44332211, 
            topic: "พบวัตถุประหลาดคล้าย UFO ที่เชียงใหม่", 
            source: "Twitter", 
            date: "2026-02-04", 
            score: 5, 
            status: "Normal", 
            reports: [] 
        },
        { 
            id: 88776655, 
            topic: "รถไฟฟ้า BTS ให้บริการฟรีตลอดปี", 
            source: "Facebook", 
            date: "2026-02-07", 
            score: 50, 
            status: "Panic", 
            reports: [
                { reporterId: "U001", type: "Fake", date: "2026-02-07T11:00:00Z", note: "เป็นเว็บปลอมทำเลียนแบบสำนักข่าว" },
                { reporterId: "U003", type: "Fake", date: "2026-02-07T11:05:00Z", note: "ลิงก์ที่ให้กดเป็นเว็บพนัน" },
                { reporterId: "U004", type: "Distorted", date: "2026-02-07T11:10:00Z", note: "ฟรีเฉพาะผู้สูงอายุในวันสงกรานต์เท่านั้น" },
                { reporterId: "U005", type: "Incite", date: "2026-02-07T11:15:00Z", note: "ทำให้คนไปออที่สถานีจนการจราจรติดขัด" },
                { reporterId: "U006", type: "Fake", date: "2026-02-07T11:20:00Z", note: "ใช้โลโก้ BTS รุ่นเก่ามาก น่าจะตัดต่อ" }
            ] 
        },
        { 
            id: 12345678, 
            topic: "ราคาทองคำเตรียมปรับลดลง 50%", 
            source: "LINE", 
            date: "2026-02-07", 
            score: 75, 
            status: "Real", 
            reports: [
                { reporterId: "U002", type: "Distorted", date: "2026-02-07T12:00:00Z", note: "ยืนยันโดยสมาคมค้าทองคำแล้วว่าเป็นข้อมูลบิดเบือน" }
            ] 
        },
        { 
            id: 87654321, 
            topic: "เตรียมประกาศล็อกดาวน์รอบใหม่เดือนหน้า", 
            source: "Web Forum", 
            date: "2026-02-07", 
            score: 95, 
            status: "Normal", 
            reports: [] 
        }
    ],
    users: [
        { id: "U001", name: "สมชาย", role: "General" },
        { id: "U002", name: "สมศักดิ์", role: "Verifier" },
        { id: "U003", name: "วิชัย", role: "General" },
        { id: "U004", name: "อนันดา", role: "General" },
        { id: "U005", name: "กัญญา", role: "General" },
        { id: "U006", name: "มะลิ", role: "General" },
        { id: "U007", name: "ปิติ", role: "Verifier" },
        { id: "U008", name: "สุนีย์", role: "General" },
        { id: "U009", name: "ชัย", role: "General" },
        { id: "U010", name: "มานะ", role: "General" }
    ]
};

export const RumorModel = {
    getAll: () => db.rumours,
    getById: (id) => db.rumours.find(r => r.id === parseInt(id)),
    
    isValidUser: (userId) => {
        return db.users.some(u => u.id === userId);
    },
    
    getSortedRumors: () => {
        return [...db.rumours].sort((a, b) => b.reports.length - a.reports.length);
    },

    saveReport: (rumorId, reporterId, type, note) => {
        const rumor = db.rumours.find(r => r.id === parseInt(rumorId));
        
        if (!RumorModel.isValidUser(reporterId)) return { error: "User ID not found." };
        if (rumor.status === 'Real' || rumor.status === 'Fake') return { error: "Verified rumors are locked." };
        
        const alreadyReported = rumor.reports.find(rep => rep.reporterId === reporterId);
        if (alreadyReported) return { error: "You already reported this rumor." };

        rumor.reports.push({ 
            reporterId, 
            type, 
            note,
            date: new Date() 
        });

        if (rumor.reports.length >= 5) {
            rumor.status = "Panic";
        }
        return { success: true };
    },

    verifyRumor: (rumorId, verifierId, newStatus) => {
        const user = db.users.find(u => u.id === verifierId);
        const rumor = db.rumours.find(r => r.id === parseInt(rumorId));
    
        if (!user || user.role !== 'Verifier') {
            return { error: "สิทธิ์ไม่เพียงพอ: เฉพาะผู้ตรวจสอบเท่านั้นที่ทำรายการนี้ได้" };
        }
    
        if (rumor) {
            rumor.status = newStatus;
            return { success: true, statusChanged: true };
        }
        return { error: "ไม่พบข้อมูลข่าวลือ" };
    }
};