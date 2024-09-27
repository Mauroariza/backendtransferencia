import { useForm, FieldError } from 'react-hook-form';
import instance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { useAuthStore } from '../store/authStore';

interface FormData {
  username: string;
  password: string;
}

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const onSubmit = async (data: FormData) => {
    try {
      await instance.post('/auth/login', data);
      setIsAuthenticated(true);
      navigate('/admin'); // Redirigir al usuario al panel de administración
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <input 
            {...register('username', { required: 'El nombre de usuario es obligatorio' })} 
            placeholder="Nombre de usuario" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.username && (errors.username as FieldError).message && <p className="text-red-500 text-sm mt-1">{(errors.username as FieldError).message}</p>}
        </div>
        <div className="mb-4">
          <input 
            {...register('password', { required: 'La contraseña es obligatoria' })} 
            type="password" 
            placeholder="Contraseña" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && (errors.password as FieldError).message && <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default SignInPage;