// src/lib/views/view.js
export const ViewHelper = {
    formatStatus: (status) => {
        const map = {
            'Normal': 'ปกติ',
            'Panic': '⚠️ วิกฤต (Panic)',
            'Real': '✅ ข่าวจริง (Real)',
            'Fake': '❌ ข่าวปลอม (Fake)'
        };
        return map[status] || status;
    },

    getLabel: (type) => {
        const map = {
            'Distorted': 'บิดเบือน',
            'Incite': 'ปลุกปั่น',
            'Fake': 'ข้อมูลเท็จ'
        };
        return map[type] || type;
    },

    // This adds the colors to your <td> in the main table
    getStatusStyle: (status) => {
        if (status === 'Panic') return "color: #dc2626; font-weight: bold;";
        if (status === 'Real') return "color: #16a34a; font-weight: bold;";
        if (status === 'Fake') return "color: #9333ea; font-weight: bold;";
        return "color: #64748b;";
    }
};