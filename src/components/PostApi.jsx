import React , {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postApiThunk } from '../store/postApi/postApiSlice';

const PostApi = () => {
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.postApi);
    console.log("🚀 ~ file: PostApi.jsx ~ line 8 ~ PostApi ~ post", post)


    useEffect(() => {
        dispatch(postApiThunk());
    }, [])

  return (
    <div>
      poast api
    </div>
  )
}

export default PostApi
