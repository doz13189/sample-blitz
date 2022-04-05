import { useParam } from "blitz"

const Post = () => {
  const pid = useParam("pid")

  return <p>Post2: {pid}</p>
}

export default Post
