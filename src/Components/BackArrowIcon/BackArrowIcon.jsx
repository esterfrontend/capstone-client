import { Box } from "@chakra-ui/react"

const BackArrowIcon = ({...props}) => {
    return (
        <Box {...props}>
            <svg width="100%" height="auto" viewBox="0 0 59 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 0.292893C19.0976 0.683417 19.0976 1.31658 18.7071 1.70711L3.41421 17H58C58.5523 17 59 17.4477 59 18C59 18.5523 58.5523 19 58 19H3.41421L18.7071 34.2929C19.0976 34.6834 19.0976 35.3166 18.7071 35.7071C18.3166 36.0976 17.6834 36.0976 17.2929 35.7071L0.292893 18.7071C-0.0976311 18.3166 -0.0976311 17.6834 0.292893 17.2929L17.2929 0.292893C17.6834 -0.0976311 18.3166 -0.0976311 18.7071 0.292893Z" fill="black"/>
            </svg>
        </Box>
    )
}

export default BackArrowIcon