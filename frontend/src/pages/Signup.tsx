import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';
import {useAuthStore } from '../store/authStore';

interface SignUpFormData {
  username: string;
  password: string;
}

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();
  const navigate = useNavigate();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await instance.post('/auth/register', data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin'); // Redirigir al usuario al panel de administración
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
          <input
            id="username"
            type="text"
            {...register('username', { required: 'El nombre de usuario es obligatorio' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'La contraseña es obligatoria' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;