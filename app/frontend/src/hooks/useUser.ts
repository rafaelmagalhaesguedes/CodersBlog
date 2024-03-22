import { useState } from 'react';
import Swal from 'sweetalert2';
import { getUserPosts, editUserPost, deleteUserPost } from '../services/UserService';
import { PostType } from '../types/PostType';

export function useUser() {
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  const fetchUserPosts = async () => {
    const data = await getUserPosts();
    setUserPosts(data);
  };

  const handleEditUserPost = async (postId: number, title: string, content: string) => {
    const data = { title, content };

    try {
      const updatedPost = await editUserPost(postId, data);
      setUserPosts(userPosts.map((post) => {
        if (post.id === postId) {
          return updatedPost;
        }
        return post;
      }));
      Swal.fire({
        title: 'Post updated successfully',
        icon: 'success',
        timer: 2000,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Failed to update post',
        icon: 'error',
        timer: 2000,
      });
    }
  };

  const handleDeleteUserPost = async (postId: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      await deleteUserPost(postId);
      setUserPosts(userPosts.filter((post) => post.id !== postId));
      Swal.fire({
        title: 'Post deleted successfully',
        icon: 'success',
        timer: 2000,
      });
    }
  };

  return {
    userPosts,
    fetchUserPosts,
    handleEditUserPost,
    handleDeleteUserPost,
  };
}
