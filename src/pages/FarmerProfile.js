import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast"; // For notifications

const FarmerProfile = () => {
  const { id } = useParams(); // Get the farmer's id from the URL
  const [farmer, setFarmer] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/farmers/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch farmer profile");
        }
        const data = await response.json();
        setFarmer(data);
        setComments(data.comments);
      } catch (error) {
        setError(error.message);
        toast.error("Error fetching farmer profile."); // Show error notification
      } finally {
        setLoading(false);
      }
    };

    fetchFarmer();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim() || newRating === 0) {
      toast.error("Please enter a comment and a rating."); // Error notification for validation
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: "Pranjali", // Static user for now
            comment: newComment,
            rating: newRating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const updatedFarmer = await response.json();
      setComments(updatedFarmer.comments);
      setNewComment("");
      setNewRating(0);
      toast.success("Comment added successfully!"); // Success notification
    } catch (error) {
      setError(error.message);
      toast.error("Error adding comment."); // Error notification
    }
  };

  const handleLikeComment = async (commentIndex) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/${id}/comments/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ commentIndex }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to like comment");
      }

      const updatedFarmer = await response.json();
      setComments(updatedFarmer.comments);
      toast.success("Comment liked!"); // Success notification
    } catch (error) {
      setError(error.message);
      toast.error("Error liking comment."); // Error notification
    }
  };

  const handleDeleteComment = async (commentIndex) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/${id}/comments`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ commentIndex }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      const updatedFarmer = await response.json();
      setComments(updatedFarmer.comments);
      toast.success("Comment deleted!"); // Success notification
    } catch (error) {
      setError(error.message);
      toast.error("Error deleting comment."); // Error notification
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
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

      {/* Comment Submission */}
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
                    Like ({comment.likes || 0}) {/* Display likes count */}
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
            <p>No comments available.</p> // Message if no comments exist
          )}
        </ul>
      </div>
    </div>
  );
};

export default FarmerProfile;
