export const ViewHelper = {
    formatStatus: (status) => {
        return status === "Panic" ? "⚠️ PANIC" : "✅ Normal";
    },
    getLabel: (type) => {
        const map = { 'Distorted': 'บิดเบือน', 'Incite': 'ปลุกปั่น', 'Fake': 'ข้อมูลเท็จ' };
        return map[type] || type;
    }
};