import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField';
import RadioButtonField from '../RadioButtonField/RadioButtonField';
import PasswordField from '../PasswordField/PasswordField';

const FieldForm = ({input, ...props}) => {
    
    switch(input.type) {
        case 'select':
            return <SelectField {...props} name={input.name}/>

        case 'text':
            return <InputField {...props} name={input.name} />

        case 'email':
            return <InputField {...props} type={'email'} name={input.name} />

        case 'phone':
            return <InputField {...props} type={'tel'} name={input.name} />

        case 'textarea':
            return <TextareaField {...props} name={input.name} />
            
        case 'checkbox':
            return <CheckboxField {...props} name={input.name}/>
        
        case 'radiobutton':
            return <RadioButtonField {...props} name={input.name} />

        case 'password':
            return <PasswordField {...props} name={input.name} />
            
        default:
            return <InputField {...props} name={input.name} />
    }
}

export default FieldForm