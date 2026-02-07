import { RumorController } from '$lib/controllers/controller.js';
export function load() {
    return { rumors: RumorController.getSortedRumors() };
}