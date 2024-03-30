import PROVINCES from '../const/provinces'

const EDITUSER_INPUTS = [
    {
        type: 'email',
        name: 'email',
        text: 'Email',
    },
    {
        name: 'name',
        text: 'Nombre y apellidos',
        role: 'profesional'
    },
    {
        name: 'name',
        text: 'Nombre del colegio',
        role: 'colegio'
    },
    {
        name: 'address',
        text: 'Dirección',
    },
    {
        name: 'postalCode',
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
        text: 'Persona de contacto',
        role: 'colegio'
    },
    {
        name: 'phone',
        text: 'Teléfono',
    },
    {
        name: 'phoneSecondary',
        text: 'Teléfono secundario',
        role: 'colegio'
    }
]

export default EDITUSER_INPUTS