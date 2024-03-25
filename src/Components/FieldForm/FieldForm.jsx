import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField';
import RadioButtonField from '../RadioButtonField/RadioButtonField';
import PasswordField from '../PasswordField/PasswordField';

const FieldForm = ({input, options, ...props}) => {
    switch(input.type) {
        case 'select':
            return <SelectField {...props} options={options} name={input.name} placeholder={input.placeholder} />

        case 'text':
            return <InputField {...props} name={input.name} placeholder={input.placeholder} />

        case 'email':
            return <InputField {...props} type={'email'} name={input.name} placeholder={input.placeholder} />

        case 'phone':
            return <InputField {...props} type={'tel'} name={input.name} placeholder={input.placeholder} />

        case 'textarea':
            return <TextareaField {...props} name={input.name} placeholder={input.placeholder} />
            
        case 'checkbox':
            return <CheckboxField {...props} options={options} name={input.name} placeholder={input.placeholder} />
        
        case 'radiobutton':
            return <RadioButtonField {...props} options={options} name={input.name} placeholder={input.placeholder} />

        case 'password':
            return <PasswordField {...props} name={input.name} placeholder={input.placeholder} />
            
        default:
            return <InputField {...props} name={input.name} placeholder={input.placeholder} />
    }
}

export default FieldForm