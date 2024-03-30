import { Text } from "@chakra-ui/react"
import CommentItem from "../CommentItem/CommentItem"

const Comments = ({comments}) => {
    if(comments.length === 0) {
        return <Text>Todavía no hay ningún comentario.</Text>
    }

    return (
        comments.map((comment, index) => {
            return <CommentItem key={index} comment={comment}/>
        })
    )
}

export default Comments