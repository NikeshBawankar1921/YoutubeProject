import React, { useEffect, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { AiTwotoneDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Profile from '../components/Profile';


function VideoPage() {
const [haschannel, setHasChannel] = useState('');
      const [isOpenProfile, setIsOpenProfile] = useState(false);
     
    const [isOpen, setIsOpen] = useState(false);
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editingComment, setEditingComment] = useState(null);
    const [editText, setEditText] = useState('');
    const { id } = useParams();
    const [currentUserId, setcurrentUserId] = useState('');


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setcurrentUserId(user?.name);
        setHasChannel(user)
        console.log('Login state changed to:', currentUserId);
    }, []);

 const [haschannelResult, setHasChannelResult] = useState(false);
  const toggleProfile = () => {
    if (haschannel?.channel !== '') {
      setHasChannelResult(true);
    } else {
      setHasChannelResult(false);
    }
    setIsOpenProfile(!isOpenProfile);
  };


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/videos/${id}`);
                setVideo(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching video:", error);
                setLoading(false);
            }
        };

        const fetchSuggestedVideos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/videos');
                const filteredVideos = response.data
                    .filter(v => v._id !== id)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 5);
                setSuggestedVideos(filteredVideos);
            } catch (error) {
                console.error("Error fetching suggested videos:", error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/videos/${id}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchVideo();
        fetchSuggestedVideos();
        fetchComments();
    }, [id]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const response = await axios.post(`http://localhost:5000/videos/${id}/comments`, {
                text: newComment,
                userId: currentUserId,
            });
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleEditComment = async (commentId) => {
        try {
            const response = await axios.put(`http://localhost:5000/videos/${id}/comments/${commentId}`, {
                text: editText,
                userId: currentUserId,
            });

            setComments(comments.map(comment =>
                comment._id === commentId ? response.data : comment
            ));
            setEditingComment(null);
            setEditText('');
        } catch (error) {
            console.error("Error editing comment:", error);
        }
    };

    const handleVideoLike = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/videos/${id}/like`, {
                userId: currentUserId
            });
            setVideo(prev => ({
                ...prev,
                likes: response.data.likes,
                dislikes: response.data.dislikes
            }));
        } catch (error) {
            console.error("Error liking video:", error);
        }
    };

    const handleVideoDislike = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/videos/${id}/dislike`, {
                userId: currentUserId
            });
            setVideo(prev => ({
                ...prev,
                likes: response.data.likes,
                dislikes: response.data.dislikes
            }));
        } catch (error) {
            console.error("Error disliking video:", error);
        }
    };



    const startEditing = (comment) => {
        setEditingComment(comment._id);
        setEditText(comment.text);
    };

    const cancelEditing = () => {
        setEditingComment(null);
        setEditText('');
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!video) {
        return <div className="flex justify-center items-center h-screen">Video not found</div>;
    }

    const isVideoLiked = video.likedBy?.includes(currentUserId);
    const isVideoDisliked = video.dislikedBy?.includes(currentUserId);















    return (
        <div className='flex flex-col text-black w-screen h-full bg-white'>
            <Header onMenuClick={toggleSidebar}  onProfileClick={toggleProfile}/> 

            <div className='flex flex-col sm:grid sm:grid-cols-3'>
                <SideBar isOpen={isOpen} />
              <Profile isOpenProfile={isOpenProfile} haschannelResult={haschannelResult} />
                <div className='col-span-2 grid w-full h-screen mb-4 overflow-y-auto no-scrollbar'>
                    {/*video playing frame*/}
                    <div className='h-120 bg-red-20 m-2'>
                        <iframe
                            className='w-full h-100 rounded-2xl'
                            src={video.videoUrl}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className='font-bold mt-2'>{video.title}</div>
                    </div>
<hr></hr>
                    <div className='flex flex-wrap   ' >
                        <img
                            className='flex border-gray-600 rounded-2xl bg-gray-300 w-fit m-2 h-13 cursor-pointer mr-6'
                            src={video.channelAvatar || "https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"}
                            alt='Channel Avatar'
                        />
                        <div>
                            <h4 className='font-bold '>{video.uploader}</h4>
                            <h4 >{video.subscribers || '0'} subscribers</h4>
                        </div>
                        <div className='rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center pt-1 ml-3 mt-4 cursor-pointer justify-items-center h-8'>
                            Subscribe
                        </div>
                        <div className='flex justify-evenly w-fit '>
                            <div className=' flex w-fit  rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center pt-1 ml-3 mt-4 cursor-pointer justify-items-center h-8'>
                                <div
                                    onClick={handleVideoLike}
                                    className={`cursor-pointer mb-1 flex items-center gap-1 ${isVideoLiked ? 'text-blue-600' : ''}`} >
                                    <BiLike className='size-5 ' />
                                    {video.likes || 0}
                                </div>
                                <hr className='rotate-90 p-3 ' />
                                <div
                                    onClick={handleVideoDislike}
                                    className={`cursor-pointer  ml-2 mb-1 flex items-center gap-1 ${isVideoDisliked ? 'text-blue-600' : ''}`}>

                                    <AiTwotoneDislike className='rotate-y-180 size-5 cursor-pointer' />
                                    {video.dislikes || 0}
                                </div>

                            </div>

                            <div className='flex w-fit rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center pt-1 ml-3 mt-4 cursor-pointer justify-items-center h-8'>
                                <PiShareFat className='size-6 mr-1 ' />Share
                            </div>
                            <div className='hidden sm:flex w-fit rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center pt-1 ml-3 mt-4 cursor-pointer justify-items-center h-8'>
                                <HiDownload className='size-6 mr-2' />Download
                            </div>
                            <div className='flex w-fit rounded-full bg-black text-white m-2 pl-3 pr-3 justify-center  ml-3 mt-4 cursor-pointer justify-items-center h-8'>
                                . . .
                            </div>
                        </div>

                        <div> <h4 className='  w-full'>Views : {video.views}</h4>
                            <h4 className='  w-full'>discription : {video.description}</h4></div>
                    </div>

                    <div className='h-auto border mt-4 p-4'>
                        <h3 className='font-bold mb-4'>Comments ({comments.length})</h3>

                        {/* Add Comment Form */}
                        <form onSubmit={handleAddComment} className='mb-6'>
                            <div className={`${localStorage.getItem('user') ? "flex" : "hidden "} items-start gap-4`}>
                                <img
                                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                    alt="User Avatar"
                                    className='w-10 h-10 rounded-full'
                                />
                                <div className={'flex-hidden'}>
                                    <input
                                        type="text"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="Add a comment..."
                                        className='w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-black'
                                    />
                                    <div className='flex justify-end mt-2 gap-4'>
                                        <button
                                            type="button"
                                            onClick={() => setNewComment('')}
                                            className='text-gray-600 hover:text-black'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className='bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300'
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Comments List */}
                        <div className='overflow-y-auto h-fit'>
                            {comments.map((comment) => {
                                const isLiked = comment.likedBy?.includes(currentUserId);
                                const isDisliked = comment.dislikedBy?.includes(currentUserId);

                                return (
                                    <div key={comments._id} className='flex gap-4'>
                                        <img
                                            src="https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"
                                            alt="User Avatar"
                                            className='w-10 h-10 rounded-full'
                                        />
                                        <div className='flex-grow'>
                                            <div className='flex items-center gap-2'>
                                                <span className='font-bold'>{comment.userId}</span>
                                                <span className='text-gray-500 text-sm'>
                                                    {new Date(comment.timestamp).toLocaleDateString()}
                                                    {comment.edited && ' (edited)'}
                                                </span>
                                            </div>

                                            {editingComment === comment._id ? (
                                                <div className='mt-2'>
                                                    <input
                                                        type="text"
                                                        value={editText}
                                                        onChange={(e) => setEditText(e.target.value)}
                                                        className='w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-black'
                                                    />
                                                    <div className='flex justify-end mt-2 gap-4'>
                                                        <button
                                                            onClick={cancelEditing}
                                                            className='text-gray-600 hover:text-black'
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => handleEditComment(comment._id)}
                                                            className='bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300'
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <p className='mt-1'>{comment.text}</p>
                                                    <div className='flex items-center gap-4 mt-2 text-gray-500'>
                                                        <button
                                                            
                                                            className={`flex items-center gap-1 hover:text-black ${isLiked ? 'text-blue-600' : ''}`}
                                                        >
                                                            <BiLike className='size-5' />
                                                            <span>{comment.likes || 0}</span>
                                                        </button>
                                                        <button
                                                            
                                                            className={`flex items-center gap-1 hover:text-black ${isDisliked ? 'text-blue-600' : ''}`}
                                                        >
                                                            <AiTwotoneDislike className='size-5' />
                                                            <span>{comment.dislikes || 0}</span>
                                                        </button>
                                                        <button className='hover:text-black'>Reply</button>
                                                        {comment.userId === currentUserId && (
                                                            <div className='flex gap-2 ml-auto'>
                                                                <button
                                                                    onClick={() => startEditing(comment)}
                                                                    className='hover:text-black'
                                                                >
                                                                    <FiEdit2 className='size-4' />
                                                                </button>
                                                                <button className='hover:text-red-500'>
                                                                    <FiTrash2 className='size-4' />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                    {/* //suggested videos */}
                <div className='h-screen w-full overflow-y-auto mt-48 sm:m-3'>
                    <h3 className='font-bold mb-4'>Suggested Videos</h3>
                    {suggestedVideos.map((suggestedVideo) => (
                        <Link
                            key={suggestedVideo._id}
                            to={`/video/${suggestedVideo._id}`}
                            className='flex mb-4 hover:bg-gray-100 p-2 rounded-lg'
                        >
                            <img
                                className='w-40 h-24 object-cover rounded-lg'
                                src={suggestedVideo.thumbnailUrl}
                                alt={suggestedVideo.title}
                            />
                            <div className='ml-2'>
                                <h4 className='font-bold line-clamp-2'>{suggestedVideo.title}</h4>
                                <p className='text-sm text-gray-600'>{suggestedVideo.uploader}</p>
                                <p className='text-sm text-gray-600'>
                                    {suggestedVideo.views} views • {new Date(suggestedVideo.uploadDate).toLocaleDateString()}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoPage
