import { Grid } from "@chakra-ui/react"
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard"

const ProfessionalsGrid = ({ professionals }) => {
  return (
    <Grid className="container"
      marginTop={'50px'}
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={"40px"}
    >
      {professionals.map((professional, index) => {
        return (
          <ProfessionalCard key={index} professional={professional}/>
        )
      })}
    </Grid>
  )
}

export default ProfessionalsGrid
