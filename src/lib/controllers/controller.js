import { RumorModel } from '$lib/models/model.js';

export const RumorController = {
    getSortedRumors: () => {
        return RumorModel.getSortedRumors();
    },

    getRumorDetails: (id) => {
        return RumorModel.getById(id);
    },

    processReport: (formData) => {
        const actionType = formData.get('actionType');
        const rumorId = formData.get('rumorId');
        const userId = formData.get('userId');

        if (actionType === 'verify') {
            const newStatus = formData.get('newStatus');
            return RumorModel.verifyRumor(rumorId, userId, newStatus);
        }

        const type = formData.get('type');
        const note = formData.get('note');
        return RumorModel.saveReport(rumorId, userId, type, note);
    }
};