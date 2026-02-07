export let db = {
    rumours: [
        { id: 10203040, topic: "Water shortage in Bangkok", source: "Twitter", date: "2026-02-07", score: 85, status: "Normal", reports: [] },
        { id: 55667788, topic: "New holiday announced", source: "Facebook", date: "2026-02-06", score: 40, status: "Normal", reports: [] },
        { id: 11223344, topic: "TSMC Factory Fire", source: "LINE", date: "2026-02-07", score: 90, status: "Panic", reports: [{},{},{},{},{}] }, // 5 reports = Panic
        { id: 99887766, topic: "Free Fuel Day at PTT", source: "TikTok", date: "2026-02-05", score: 15, status: "Normal", reports: [{},{}] },
        { id: 44332211, topic: "Alien sighting in Chiang Mai", source: "Twitter", date: "2026-02-04", score: 5, status: "Normal", reports: [] },
        { id: 88776655, topic: "BTS Skytrain free forever", source: "Facebook", date: "2026-02-07", score: 50, status: "Panic", reports: [{},{},{},{},{},{}] }, // Panic
        { id: 12345678, topic: "Gold price dropping 50%", source: "LINE", date: "2026-02-07", score: 75, status: "Normal", reports: [{},{},{}] },
        { id: 87654321, topic: "New Pandemic lockdown", source: "Web Forum", date: "2026-02-07", score: 95, status: "Normal", reports: [] }
    ],
    users: [
        { id: "U001", name: "Somchai", role: "General" },
        { id: "U002", name: "Somsak", role: "Verifier" },
        { id: "U003", name: "Wichai", role: "General" },
        { id: "U004", name: "Ananda", role: "General" },
        { id: "U005", name: "Kanya", role: "General" },
        { id: "U006", name: "Mali", role: "General" },
        { id: "U007", name: "Piti", role: "Verifier" },
        { id: "U008", name: "Sunee", role: "General" },
        { id: "U009", name: "Chai", role: "General" },
        { id: "U010", name: "Mana", role: "General" }
    ]
};

export const RumorModel = {
    getAll: () => db.rumours,
    getById: (id) => db.rumours.find(r => r.id === parseInt(id)),
    
    isValidUser: (userId) => {
        return db.users.some(u => u.id === userId);
    },

    saveReport: (rumorId, reporterId, type) => {
        const rumor = db.rumours.find(r => r.id === parseInt(rumorId));
        if (!RumorModel.isValidUser(reporterId)) {
            return { error: "Invalid User ID." };
        }

        if (rumor.status === 'Real' || rumor.status === 'Fake') {
            return { error: "This rumor is already verified and locked." };
        }
        
        const exists = rumor.reports.find(rep => rep.reporterId === reporterId);
        if (exists) return { error: "You have already reported this rumor." };

        rumor.reports.push({ reporterId, type, date: new Date() });

        if (rumor.reports.length >= 5) {
            rumor.status = "Panic";
        }
        return { success: true };
    }
};