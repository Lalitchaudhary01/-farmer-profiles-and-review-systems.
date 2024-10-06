import React, { useState } from "react";
import { useParams } from "react-router-dom";

const farmers = [
  {
    id: 1,
    name: "Farmer A",
    photo:
      "https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "farmerA@example.com",
    phone: "1234567890",
    bio: "Experienced in organic farming",
  },
  {
    id: 2,
    name: "Farmer B",
    photo:
      "https://plus.unsplash.com/premium_photo-1661964146096-98dbd0becc78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D",
    email: "farmerB@example.com",
    phone: "0987654321",
    bio: "Specializes in fruit cultivation",
  },
];

const FarmerProfile = () => {
  const { id } = useParams();
  const farmer = farmers.find((farmer) => farmer.id === parseInt(id));

  const [comments, setComments] = useState([
    {
      user: "User 1",
      comment: "Great experience with Farmer A!",
      rating: 5,
      likes: 0,
      replies: [],
    },
    {
      user: "User 2",
      comment: "Very knowledgeable and helpful.",
      rating: 4,
      likes: 0,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;

    const newCommentsList = [
      ...comments,
      {
        user: "You",
        comment: newComment,
        rating: newRating,
        likes: 0,
        replies: [],
      },
    ];
    setComments(newCommentsList);
    setNewComment("");
    setNewRating(0);
  };

  const handleLikeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  if (!farmer) {
    return <div>Farmer not found!</div>;
  }

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">{farmer.name}</h2>
      <img
        src={farmer.photo}
        alt={farmer.name}
        className="w-32 h-32 rounded-full object-cover" // Adjusted width and height for circular shape
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
                }`}
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
          {comments.map((comment, index) => (
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
                  Like ({comment.likes})
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteComment(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FarmerProfile;
