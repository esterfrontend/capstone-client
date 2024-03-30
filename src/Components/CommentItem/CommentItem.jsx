import { Box, Text } from "@chakra-ui/react"
import './CommentItem.css'
import {formatDate} from '../../utils'

const CommentItem = ({comment}) => {
    const formatedDate = formatDate(comment.createdAt)

    return (
        <Box className={'comment-item'} 
            mb={'10px'} 
            padding={'15px'}
        >
            <Text fontWeight={'bold'}>
                {comment.author.name}
            </Text>
            <Text fontSize={'13px'}>
                {formatedDate}
            </Text>
            <Text fontSize={'15px'}>
                {comment.text}
            </Text>
        </Box>
    )
}

export default CommentItem