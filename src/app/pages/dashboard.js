import { useForm } from 'react-hook-form';

export default function Dashboard() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Submit job posting data to API
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Job Title</label>
          <input
            {...register('title', { required: 'Title is required' })}
            className="border p-2 w-full"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block">Company</label>
          <input
            {...register('company', { required: 'Company is required' })}
            className="border p-2 w-full"
          />
          {errors.company && <p className="text-red-500">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block">Location</label>
          <input
            {...register('location', { required: 'Location is required' })}
            className="border p-2 w-full"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="border p-2 w-full"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Post Job
        </button>
      </form>
    </div>
  );
}