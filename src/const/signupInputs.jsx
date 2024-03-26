import PROVINCES from '../const/provinces'

export const ROLE_INPUTS = {
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
}

const SIGNUP_INPUTS = [
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
        text: 'Nombre y apellidos',
        role: 'profesional'
    },
    {
        name: 'name',
        placeholder: '',
        text: 'Nombre del colegio',
        role: 'colegio'
    },
    {
        name: 'registrationNumber',
        placeholder: '',
        text: 'Número de colegiado (será comprobado)',
        role: 'profesional'
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
        role: 'colegio'
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
        role: 'colegio'
    }
]

export default SIGNUP_INPUTS