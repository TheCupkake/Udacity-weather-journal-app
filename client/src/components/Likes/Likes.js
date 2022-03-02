import React, {useState} from 'react'
import { CardActions, Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../actions/posts';

const LikesAndDelete = ({post}) => {

    const classes = [];
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const hasLikedPost = likes.find((like) => like === (user?.result?.googleId || user?.result?._id))

    const handleLike = async () => {
        dispatch(likePost(post._id));
            
        if(hasLikedPost){
            setLikes(post.likes.filter((id) => id !== (user?.result.googleId || user?.result?._id)))
        } else {
            setLikes([...post.likes, (user?.result.googleId || user?.result?._id)])
        }

    };

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };
     


    return (

        <CardActions className={classes.cardActions}>
                <Button size="small" disabled={!user?.result} color="primary" onClick ={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick ={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
                
            </CardActions>

    )
}

export default LikesAndDelete