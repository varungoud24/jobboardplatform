import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        const response = await axios.get(`/api/jobs/${id}`); // Mock API endpoint
        setJob(response.data);
      };
      fetchJob();
    }
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="mt-4">{job.description}</p>
    </div>
  );
}