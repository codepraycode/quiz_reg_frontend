const URL = process.env.REACT_APP_SERVER_URL;

const REGION_LOGIN = `${URL}/api/region/login`;
const REGISTER = `${URL}/api/participant/create`;
const PARTICIPANT = `${URL}/api/participant`;
const PROVINCES = `${URL}/api/province`;
const CATEGORIES = `${URL}/api/participant/categories`;

const getFileUploadURl = (id) => {
    return `${PARTICIPANT}/${id}/upload`
}

// Inputs
const participants_data = {
    passport: {
        value: ''
    },
    first_name: {
        value: ''
    },
    last_name: {
        value: ''
    },
    other_name: {
        value: '',
    },
    gender: {
        value: '',
    },
    date_of_birth: {
        value: '',
    },
    region: {
        value: 'Region 24',
    },
    province: {
        value: '',
    },
    zone: {
        value: '',
    },
    area: {
        value: '',
    },
    parish: {
        value: '',
    },
    participant_category: {
        value: ''
    },
    quiz_category: {
        value: '',
    },
    birth_certificate: {
        value: '',
    },
    letter_of_recommendation: {
        value: '',
    },
    regional_coordinator: {
        value: '',
    },
    provincial_coordinator: {
        value: '',
    },
}

const participants_data_config = {
    passport: {
        type: 'image',
        file: '',
        url: '',
        required: true,
    },
    first_name: {
        type: 'text',

        required: true,
    },
    last_name: {
        type: 'text',

        required: true,
    },
    other_name: {
        type: 'text',

        required: true,
    },
    gender: {
        type: 'radio',

        options: ['male', 'female'],
        required: true,
    },
    date_of_birth: {
        type: 'date',

        required: true,
        ordinary: false
    },
    region: {
        type: 'text',
        required: true,
        readOnly: true
    },
    province: {
        type: 'select',
        options: ['one'],
        required: true,
        fetchUrl: PROVINCES
    },
    zone: {
        type: 'text',

        required: true,
    },
    area: {
        type: 'text',

        required: true,
    },
    parish: {
        type: 'text',

        required: true,
    },
    participant_category: {
        type: 'select',
        options: [],
        required: true,
        fetchUrl: CATEGORIES
    },
    quiz_category: {
        type: 'select',
        options: [],
        required: true,
        fetchUrl: `${CATEGORIES}/quiz`
    },
    birth_certificate: {
        type: 'file',

        url: '',
        required: true,
    },
    letter_of_recommendation: {
        type: 'file',

        url: '',
        required: true,
    },
    regional_coordinator: {
        type: 'text',

        required: true,
    },
    provincial_coordinator: {
        type: 'text',

        required: true,
    },
}


module.exports = {
    REGION_LOGIN,
    participants_data,
    participants_data_config,
    REGISTER,
    PARTICIPANT,
    getFileUploadURl
}