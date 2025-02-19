export default function ReviewCard({ review }) {
    return (
      <div className="border p-4 rounded-lg">
        <h3 className="font-bold">{review.user}</h3>
        <p>{review.comment}</p>
      </div>
    );
  }