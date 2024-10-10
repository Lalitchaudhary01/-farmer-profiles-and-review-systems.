import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast"; // For notifications
import axios from "axios"; // Import Axios

const FarmerProfile = () => {
  const { id } = useParams(); // Getting the farmer's id from the route parameters
  const [farmer, setFarmer] = useState(null); // To store the farmer's details
  const [comments, setComments] = useState([]); // To store the comments
  const [newComment, setNewComment] = useState(""); // To store the new comment text
  const [newRating, setNewRating] = useState(0); // To store the new rating
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch farmer data when the component loads
  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/farmers/${id}`
        );
        setFarmer(response.data); // Set farmer data
        setComments(response.data.comments); // Set comments data
      } catch (error) {
        setError(error.message); // If there's an error, show it
        toast.error("Error fetching farmer profile.");
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchFarmer();
  }, [id]);

  // Handle adding a comment
  const handleCommentSubmit = async () => {
    if (!newComment.trim() || newRating === 0) {
      toast.error("Please enter a comment and a rating.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/farmers/${id}/comments`,
        {
          user: "Pranjali", // Hardcoded user for testing, replace with actual user
          comment: newComment,
          rating: newRating,
        }
      );

      console.log(response.data); // Log the response for debugging
      setComments(response.data.comments); // Update comments after submission
      setNewComment(""); // Clear comment input
      setNewRating(0); // Reset rating input
      toast.success("Comment added successfully!");
    } catch (error) {
      setError(error.message);
      toast.error("Error adding comment.");
    }
  };

  // Handle liking a comment
  const handleLikeComment = async (commentIndex) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/farmers/${id}/comments/like`,
        { commentIndex } // Send the comment index to the server
      );

      console.log(response.data); // Log the response for debugging
      setComments(response.data.comments); // Update the comments with the new likes count
      toast.success("Comment liked!");
    } catch (error) {
      setError(error.message);
      toast.error("Error liking comment.");
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (commentIndex) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/farmers/${id}/comments`,
        { data: { commentIndex } } // Data for DELETE request
      );

      console.log(response.data); // Log the response for debugging
      setComments(response.data.comments); // Update the comments after deletion
      toast.success("Comment deleted!");
    } catch (error) {
      setError(error.message);
      toast.error("Error deleting comment.");
    }
  };

  // If still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there was an error, show the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">{farmer.name}</h2>
      <img
        src={farmer.photo}
        alt={farmer.name}
        className="w-32 h-32 rounded-full object-cover mx-auto"
      />
      <p className="text-gray-700">Email: {farmer.email}</p>
      <p className="text-gray-700">Phone: {farmer.phone}</p>
      <p className="text-gray-700">Bio: {farmer.bio}</p>

      {/* Comment Submission Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Add a Comment:</h3>
        <div className="flex flex-col space-y-2">
          <textarea
            className="border rounded p-2"
            rows="3"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
          />
          <div className="flex items-center">
            <span className="mr-2">Rate the Farmer:</span>
            {[1, 2, 3, 4, 5].map((rate) => (
              <span
                key={rate}
                className={`cursor-pointer text-xl ${
                  rate <= newRating ? "text-yellow-500" : "text-gray-300"
                } hover:text-yellow-500`}
                onClick={() => setNewRating(rate)}
              >
                ⭐
              </span>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white rounded p-2"
            onClick={handleCommentSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments:</h3>
        <ul className="space-y-2">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">{comment.user}</span>
                  <span className="text-yellow-500">
                    {"⭐".repeat(comment.rating)}
                  </span>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
                <div className="flex justify-between mt-2">
                  <button
                    className="text-blue-500"
                    onClick={() => handleLikeComment(index)}
                  >
                    Like ({comment.likes || 0})
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteComment(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FarmerProfile;
