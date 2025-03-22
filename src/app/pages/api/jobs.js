export default function handler(req, res) {
    const jobs = [
      { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', description: 'Work on cutting-edge projects.' },
      { id: 2, title: 'Backend Developer', company: 'Code Masters', location: 'New York', description: 'Build scalable APIs.' },
    ];
  
    if (req.method === 'GET') {
      if (req.query.id) {
        const job = jobs.find((j) => j.id === parseInt(req.query.id));
        return res.status(200).json(job);
      }
      return res.status(200).json(jobs);
    }
  
    res.status(405).json({ message: 'Method not allowed' });
  }