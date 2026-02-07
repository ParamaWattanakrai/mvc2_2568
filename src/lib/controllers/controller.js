import { RumorModel } from '../models/model.js';

export const RumorController = {
    getSortedRumors: () => {
        return RumorModel.getAll().sort((a, b) => b.reports.length - a.reports.length);
    },
    
    getRumorDetails: (id) => {
        return RumorModel.getById(id);
    },

    processReport: (formData) => {
        const rumorId = formData.get('rumorId');
        const userId = formData.get('userId');
        const type = formData.get('type');
        
        return RumorModel.saveReport(rumorId, userId, type);
    }
};