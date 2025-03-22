import { useEffect } from 'react';
import axios from 'axios';
import useStore from '../store/store';
import JobCard from '../components/jobcard';

export default function Home() {
  const { jobs, setJobs } = useStore();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/jobs'); // Mock API endpoint
      setJobs(response.data);
    };
    fetchJobs();
  }, [setJobs]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}