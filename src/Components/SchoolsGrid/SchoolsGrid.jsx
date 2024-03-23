import { Grid } from "@chakra-ui/react"
import SchoolCard from "../SchoolCard/SchoolCard"

const SchoolsGrid = ({schools}) => {
    return (
        <Grid className="container"
            marginTop={'50px'}
            templateColumns={[
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
            ]}
            gap={"40px"}
        >
            { schools.map((school, index) => {
                return <SchoolCard key={index} school={school}/>
            })}
        </Grid>
    )
}

export default SchoolsGrid