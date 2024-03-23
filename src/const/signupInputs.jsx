import PROVINCES from '../const/provinces'

const SIGNUP_INPUTS = [
    {
        type: 'radiobutton',
        name: 'role',
        placeholder: '',
        text: '¿Qué tipo de usuario eres?',
        options: {
            data: [
                {
                    name:'Colegio',
                    value: 'colegio'
                },
                {
                    name:'Psicólogo',
                    value: 'profesional'
                }
            ]
        }
    },
    {
        type: 'email',
        name: 'email',
        placeholder: '',
        text: 'Email',
    },
    {
        type: 'password',
        name: 'password',
        placeholder: '',
        text: 'Contraseña',
    },
    {
        name: 'name',
        placeholder: '',
        text: 'Nombre',
    },
    {
        name: 'registrationNumber',
        placeholder: '',
        text: 'Número de colegiado',
    },
    {
        name: 'address',
        placeholder: '',
        text: 'Dirección',
    },
    {
        name: 'postalCode',
        placeholder: '',
        text: 'Código postal',
    },
    {
        type: 'select',
        name: 'province',
        placeholder: 'Selecciona una provincia',
        text: 'Provincia',
        options: {
            data: PROVINCES,
        }
    },
    {
        name: 'contactPerson',
        placeholder: '',
        text: 'Persona de contacto',
    },
    {
        name: 'phone',
        placeholder: '',
        text: 'Teléfono',
    },
    {
        name: 'phoneSecondary',
        placeholder: '',
        text: 'Teléfono secundario',
    }
]

export default SIGNUP_INPUTS