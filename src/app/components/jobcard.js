export default function JobCard({ job }) {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <a href={`/jobs/${job.id}`} className="text-blue-500 hover:underline">
          View Details
        </a>
      </div>
    );
  }