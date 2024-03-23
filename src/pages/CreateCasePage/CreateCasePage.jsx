import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import TextBlock from '../../Components/TextBlock/TextBlock';
import CreateCaseForm from '../../Components/CreateCaseForm/CreateCaseForm';
import { Box } from "@chakra-ui/react";

const CreateCasePage = () => {

    return (
        <PageWrapper>
            <Box as="section" marginBottom={'100px'}>
                <MainHeading>
                    ¿Eres víctima o testigo de un caso de bullying?
                </MainHeading>
                <TextBlock>
                    <p><strong>¡Gracias por dar este paso!</strong></p>
                    <p>Nuestra prioridad es la seguridad y el bienestar de todos, por lo que, si lo deseas, <strong>el aviso puede ser totalmente anónimo</strong>. Ni el colegio, ni la víctima, ni los agresores sabrán quién a dado el aviso.</p>
                    <p>No importa si tienes poca información o si no consigues explicarte bien, toda la información que puedas darnos es de mucha ayuda. Una vez más, ¡gracias!</p>
                    <p>¡Empezamos!</p>
                </TextBlock>
                <CreateCaseForm/>
            </Box>
        </PageWrapper>
    );
}

export default CreateCasePage;
