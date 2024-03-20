import { Grid } from "@chakra-ui/react"

const ProfessionalsGrid = ({ professionals }) => {
  const handleLike = (e) => {
    e.preventDefault()
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={"40px"}
    >
      {professionals.map(({ name, surname }) => {
        return (
          <div>
            <h2>{name}{surname}</h2>
          </div>
        )
      })}
    </Grid>
  )
}

export default ProfessionalsGrid
