import { Box, Grid } from "@chakra-ui/react"
import SchoolCard from "../SchoolCard/SchoolCard"

const SchoolsGrid = ({schools, ...props}) => {
    return (

            <Grid {...props}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                gap={["10px", "20px", "20px", "30px"]}
                padding={['50px 30px 60px 30px', '50px 30px 60px 30px', '50px 30px', '80px 50px']}
            >
                { schools.map((school, index) => {
                    return <SchoolCard key={index} school={school}/>
                })}
            </Grid>
    )
}

export default SchoolsGrid