const URL = process.env.REACT_APP_SERVER_URL;

const REGION_LOGIN = `${URL}/api/region/login`;



// Inputs
const participants_data_config = {
    passport: {
        type: 'image',
        value: '',
        url: '',
        required: true,
    },
    first_name: {
        type: 'text',
        value: '',
        required: true,
    },
    last_name: {
        type: 'text',
        value: '',
        required: true,
    },
    other_name: {
        type: 'text',
        value: '',
        required: true,
    },
    gender: {
        type: 'radio',
        value: '',
        options: ['male', 'female'],
        required: true,
    },
    date_of_birth: {
        type: 'date',
        value: '',
        required: true,
        ordinary: false
    },
    region: {
        type: 'text',
        value: '',
        required: true,
        readOnly: true
    },
    province: {
        type: 'select',
        value: '',
        options: ['one'],
        required: true,
        fetchUrl: ''
    },
    zone: {
        type: 'text',
        value: '',
        required: true,
    },
    area: {
        type: 'text',
        value: '',
        required: true,
    },
    parish: {
        type: 'text',
        value: '',
        required: true,
    },
    participant_category: {
        type: 'select',
        value: '',
        options: ['one'],
        required: true,
        fetchUrl: ''
    },
    quiz_category: {
        type: 'select',
        value: '',
        options: ['one'],
        required: true,
        fetchUrl: ''
    },
    birth_certificate: {
        type: 'file',
        value: '',
        url: '',
        required: true,
    },
    letter_of_recommendation: {
        type: 'file',
        value: '',
        url: '',
        required: true,
    },
    regional_coordinator: {
        type: 'text',
        value: '',
        required: true,
    },
    provincial_coordinator: {
        type: 'text',
        value: '',
        required: true,
    },
}
module.exports = {
    REGION_LOGIN,
    participants_data_config
}