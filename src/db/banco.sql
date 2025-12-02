CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(150) UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Administrador', 'admin@email.com', 'senha123'),
('Professor Abel', 'abel@email.com', 'senha456');


CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  turma VARCHAR(50) NOT NULL,
  idade INT NOT NULL
);

INSERT INTO alunos (nome, email, turma, idade) VALUES
('Ana Clara',      'ana.clara@email.com',      '315 DFS', 24),
('Bruno Ferreira', 'bruno.ferreira@email.com', '309 DFS', 25),
('Carla Souza',    'carla.souza@email.com',    '315 DFS', 23),
('Diego Santos',   'diego.santos@email.com',   '714 DFS', 34),
('Eduarda Lima',   'eduarda.lima@email.com',   '710 DFS', 25),
('Felipe Rocha',   'felipe.rocha@email.com',   '710 DFS', 33),
('Gabriela Alves', 'gabriela.alves@email.com', '714 DFS', 44),
('Henrique Costa', 'henrique.costa@email.com', '519 DFS', 35),
('Isabela Moraes', 'isabela.moraes@email.com', '515 DFS', 23),
('João Pedro',     'joao.pedro@email.com',     '515 DFS', 24);

