// Demo prompt generation now requires an approved, unexpired server session.
import {demoRequest} from './demo-gate.js';
window.demoBasePrompt = async briefing => (await demoRequest('/demo/prompt',briefing)).prompt;
