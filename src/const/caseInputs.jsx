import schoolsData from '../mocks/mockSchools.json'

const CASE_INPUTS = [
    {
        type: 'select',
        name: 'school_id',
        placeholder: 'Selecciona el colegio',
        title: '¿En qué colegio se da el caso?',
        text: 'Selecciona en el desplegable el colegio. Si no aparece en el listado, puede que el colegio no esté inscrito en el programa.',
        options: {
            data: schoolsData,
        }
    },
    {
        type: 'textarea',
        name: 'victim',
        placeholder: 'Escribe aquí',
        title: '¿Qué persona es la que sufre bullying?',
        text: 'Cuanto más específico seas, más fácil será para nosotros ayudarle. Si no tienes los datos suficientes, no pasa nada, cuéntanos lo que sepas (nombre, edad, curso, características físicas,...) cualquier dato es importante.',
    },
    {
        type: 'checkbox',
        name: 'place',
        placeholder: 'Escribe aquí',
        title: '¿Dónde sufre el acoso?',
        text: 'Indícanos dónde y cómo sufre bullying. Puedes marcar varias opciones si ocurre a través de varios medios.',
        options: {
            data: [
                {
                    value: 'atSchool',
                    text: 'En el colegio'
                },
                {
                    value: 'outside',
                    text: 'Fuera del colegio',
                },
                {
                    value: 'socialMedia',
                    text: 'En las redes sociales',
                }
            ]
        }
    },
    {
        type: 'textarea',
        name: 'how',
        placeholder: 'Escribe aquí',
        title: '¿De qué forma le acosan?',
        text: 'Cuéntanos un poco más, cómo le acosan, cuándo,... Recuerda que toda la información es valiosa.',
    },
    {
        type: 'textarea',
        name: 'attacker',
        placeholder: 'Escribe aquí',
        title: '¿Quién o quiénes son las personas agresoras?',
        text: 'Cuanto más específico seas, más fácil será para nosotros detectar el problema. Si no tienes los datos suficientes, no pasa nada, cuéntanos lo que sepas (nombre, edad, curso, características físicas,...) cualquier dato es importante.',
    },
    {
        type: 'textarea',
        name: 'moreInformation',
        placeholder: 'Escribe aquí',
        title: '¿Quieres contarnos algo más?',
        text: 'Este es un espacio libre en el que, si quieres, puedes contarnos con más detalle el caso. Toda la información de la que dispongas es de mucha ayuda, hasta el detalle más pequeño es importante.',
    },
    {
        type: 'radiobutton',
        name: 'anonymous',
        placeholder: 'Escribe aquí',
        title: '¿Quieres ser anónimo?',
        text: 'Si nos cuentas quién eres, podremos hablar contigo en caso de necesitar ayuda. Si es el caso, siempre se hará en un entorno seguro, de la forma que indique el psicólogo encargado del caso. Si prefieres ser anónimo, solo tienes que marcarlo abajo. Tus datos estarán a salvo y ni el colegio, ni los profesionales tendrán acceso a él.',
        options: {
            data: [
                {
                    name:'Anónimo',
                    value: 'true'
                },
                {
                    name:'Quiero decir quién soy',
                    value: 'false'
                }
            ]
        }
    },
    {
        type: 'textarea',
        name: 'informantName',
        placeholder: 'Escribe aquí',
        title: '¿Quién eres?',
        text: 'Cuéntanos un poco sobre ti. Puedes decirnos tu nombre, si eres alumno o familiar, dejar un teléfono o email... Lo que tú quieras contarnos.'
    }
]

export default CASE_INPUTS