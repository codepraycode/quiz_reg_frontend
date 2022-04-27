import FileWidget from './files';
import TextInput from './text';
import selectWidget from './selection';
import Dates from './dates';

const FormIt = (config) => {
    let {type,...rest} = config;

    if(type === 'image'){
        return FileWidget('image', rest);
    }

    if(type === 'file'){
        return FileWidget('file', rest);
    }

    if(type === 'text'){
        return TextInput(config);
    }

    if(type === 'radio'){
        return selectWidget('radio', config);
    }
    if(type === 'select'){
        return selectWidget('select', config);
    }
    if(type === 'date'){
        // console.log("outputing dates")
        return Dates(config)
    }

    return null;

    

};

export default FormIt;