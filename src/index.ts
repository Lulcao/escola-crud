import express from 'express';
import alunoRoutes from './routes/alunoRoutes';
import cursoRoutes from './routes/cursoRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', alunoRoutes);
app.use('/api', cursoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
