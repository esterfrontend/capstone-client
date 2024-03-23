import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField';
import RadioButtonField from '../RadioButtonField/RadioButtonField';

const FieldForm = ({input, options}) => {
    switch(input.type) {
        case 'select':
            return <SelectField options={options} name={input.name} placeholder={input.placeholder} />

        case 'text':
            return <InputField name={input.name} placeholder={input.placeholder} />

        case 'textarea':
            return <TextareaField name={input.name} placeholder={input.placeholder} />
            
        case 'checkbox':
            return <CheckboxField options={options} name={input.name} placeholder={input.placeholder} />
        
        case 'radiobutton':
            return <RadioButtonField options={options} name={input.name} placeholder={input.placeholder} />

        default:
            return <p>Default</p>
    }
}

export default FieldForm