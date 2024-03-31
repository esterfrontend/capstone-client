import { Box, Grid, RadioGroup, Radio } from "@chakra-ui/react"
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard"
import "./ProfessionalSelector.css"

const ProfessionalSelector = ({ professionals, onChange }) => {
    return (
        <RadioGroup className={'professional-selector'} w={'fit-content'}>
            <Grid 
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                gap={["10px", "15px", "20px", "40px"]}
            >
                {professionals.map((professional, index) => {
                    return (
                        <Radio name='professional_id' key={index} onChange={onChange} value={professional._id}>
                            <ProfessionalCard professional={professional}/>
                        </Radio>
                    )
                })}
            </Grid>
    </RadioGroup>
  )
}

export default ProfessionalSelector
