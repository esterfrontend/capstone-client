import { Box, Text } from "@chakra-ui/react"
import './CommentItem.css'

const CommentItem = ({comment}) => {
        
    const setDate = () => {
        const date = new Date(comment.createdAt);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        let minutes = date.getMinutes();

        day = day < 10 ? '0' + day : day
        month = month < 10 ? '0' + month : month
        minutes = minutes < 10 ? '0' + minutes : minutes

        const formatedDate = `${day}/${month}/${year} a las ${hour}:${minutes}h`

        return formatedDate
    }

    const formatedDate = setDate()

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