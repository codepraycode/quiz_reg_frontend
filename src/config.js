const URL = process.env.REACT_APP_SERVER_URL;

const REGION_LOGIN = `${URL}/api/region/login`;



// Inputs
const participants_data_config = {
    passport: {
        type: 'image',
        value: '',
        url: '',
        require: true,
    },
    first_name: {
        type: 'text',
        value: '',
        require: true,
    },
    last_name: {
        type: 'text',
        value: '',
        require: true,
    },
    other_name: {
        type: 'text',
        value: '',
        require: true,
    },
    gender: {
        type: 'radio',
        value: '',
        options: ['male', 'female'],
        require: true,
    },
    date: {
        type: 'date',
        value: '',
        require: true,
        ordinary: false
    },
    region: {
        type: 'text',
        value: '',
        require: true,
        readOnly: true
    },
    province: {
        type: 'option',
        value: '',
        require: true,
        fetchUrl: ''
    },
    zone: {
        type: 'text',
        value: '',
        require: true,
    },
    area: {
        type: 'text',
        value: '',
        require: true,
    },
    parish: {
        type: 'text',
        value: '',
        require: true,
    },
    participant_category: {
        type: 'option',
        value: '',
        require: true,
        fetchUrl: ''
    },
    quiz_category: {
        type: 'option',
        value: '',
        require: true,
        fetchUrl: ''
    },
    birth_certificate: {
        type: 'file',
        value: '',
        url: '',
        require: true,
    },
    letter_of_recommendation: {
        type: 'file',
        value: '',
        url: '',
        require: true,
    },
    regional_coordinator: {
        type: 'text',
        value: '',
        require: true,
    },
    provincial_coordinator: {
        type: 'text',
        value: '',
        require: true,
    },
}
module.exports = {
    REGION_LOGIN,
    participants_data_config
}