const action1 = {
    name: '<ACTION_NAME>', // e.g. 'create_event'
    description: '<ACTION_DESCRIPTION>', // e.g. 'Create a new event in Google Calendar'
    displayName: '<ACTION_NAME>', // e.g. 'Create Event'
    outputSchema: {
        type: 'object',
        properties: {
            event_id: {
                type: 'string',
                displayName: 'Event ID',
            },
            event_link: {
                type: 'string',
                displayName: 'Event Link',
            },
        },
    },
    props: {
        calendar_id: {
            type: 'string',
            displayName: 'Calendar ID',
            required: true,
        },
        title: {
            type: 'string',
            displayName: 'Title of the event',
            required: true,
        },
        start_date_time: {
            type: 'string',
            displayName: 'Start date time of the event',
            description: 'By default it\'ll be the current time',
            required: false,
        },
        end_date_time: {
            type: 'string',
            displayName: 'End date time of the event',
            description: 'By default it\'ll be the current time',
            required: false,
        },
    },
    async run({ auth, props }) {
        // Implementation...

        // return ...
    },

};

module.exports = {
    action1,
};