import FileWidget from './files';
import TextInput from './text';
import selectWidget from './selection';

const FormIt = (config) => {
    let {type,...rest} = config;

    if(type === 'image'){
        return FileWidget('image', rest);
    }

    if(type === 'text'){
        return TextInput(config);
    }

    if(type === 'radio'){
        return selectWidget('radio', config);
    }

    return null;

    

};

export default FormIt;