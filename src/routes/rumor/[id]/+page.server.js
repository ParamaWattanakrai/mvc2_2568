import { RumorController } from '$lib/controllers/controller.js';

export function load({ params }) {
    return { rumor: RumorController.getRumorDetails(params.id) };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        return RumorController.processReport(data);
    }
};