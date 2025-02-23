export default function ReviewCard({ review }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{review.user}</h3>
      <p className="text-gray-400">{review.comment}</p>
      <p className="text-yellow-400 font-bold">Rating: {review.rating}/10</p>
    </div>
  );
}