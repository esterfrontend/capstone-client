import { Grid } from "@chakra-ui/react"
import SchoolCard from "../SchoolCard/SchoolCard"

const SomeUsersGrid = ({ schools }) => {
  return (
    <Grid
      margin={'50px 0'}
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={["20px", "30px", "40px", "50px"]}
    >
      {schools.map((school, index) => {
        return (
          <SchoolCard key={index} school={school}/>
        )
      })}
    </Grid>
  )
}

export default SomeUsersGrid
