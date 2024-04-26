const { action_1 } = require('/actions/action_1.js');

export const app = {
    name: '<app_name>', // e.g. 'google-calendar'
    displayName: '<APP_NAME>', // e.g. 'Google Calendar'
    authors: ['Kafka'],
    actions: [
        action1
    ] // e.g. [create_event, delete_event]
};
