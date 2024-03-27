import { Grid, RadioGroup, Radio } from "@chakra-ui/react"
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard"

const ProfessionalSelector = ({ professionals, onChange }) => {
    return (
        <RadioGroup w={'fit-content'} margin={'0 auto'}>
            <Grid className="container"
                marginTop={'50px'}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                gap={"40px"}
            >
                {professionals.map((professional, index) => {
                    return (
                        <Radio name='professional_id' onChange={onChange} key={index} value={professional._id}>
                            <ProfessionalCard professional={professional}/>
                        </Radio>
                    )
                })}
            </Grid>
    </RadioGroup>
  )
}

export default ProfessionalSelector
