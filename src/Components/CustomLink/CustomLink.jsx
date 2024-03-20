import { Link } from "@chakra-ui/react"
import { Link as ReactRouterLink} from "react-router-dom"

const CustomLink = (props) => {
    return <Link {...props} as={ReactRouterLink}></Link>
}

export default CustomLink