import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Verificar que los datos no estén vacíos
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).send('Username already exists');
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).send('User registered');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal server error');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Verificar que los datos no estén vacíos
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Buscar el usuario
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid credentials');
    }

    const jwtKey = process.env.JWT_KEY;
    if (!jwtKey) {
      throw new Error('JWT_KEY is not defined');
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user.id }, jwtKey);
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal server error');
  }
};