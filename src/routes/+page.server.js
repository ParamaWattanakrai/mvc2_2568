import { RumorModel } from '$lib/models/model.js';

export async function load() {
    const rumors = RumorModel.getSortedRumors(); 
    return { rumors };
}