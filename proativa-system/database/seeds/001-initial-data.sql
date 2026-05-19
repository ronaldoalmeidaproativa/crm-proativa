-- Seed: Initial Data for PROATIVA System

-- Insert Sample Users (password for all is 'admin123')
INSERT INTO users (name, email, password_hash, role) VALUES
('Admin Sistema', 'admin@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'admin'),
('Ana Silva', 'ana.atendimento@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'atendimento'),
('Carlos Santos', 'carlos.planejamento@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'planejamento'),
('Beatriz Costa', 'bia.criacao@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'criacao'),
('Daniel Oliveira', 'dan.midia@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'midia'),
('Fernanda Lima', 'fer.financeiro@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'financeiro'),
('Ricardo Mendes', 'ricardo.diretor@proativa.com', '$2a$10$rQZ9vXJxK7zLqJ8hN5qPWOYgH3nF8mK2pL4xR6tU8vW0yA2bC4dE6', 'diretor')
ON CONFLICT (email) DO NOTHING;

-- Insert Sample Clients
INSERT INTO clients (name, email, phone, company, industry, website, status) VALUES
('João Pereira', 'joao@techstart.com.br', '(11) 99999-1111', 'TechStart', 'Tecnologia', 'https://techstart.com.br', 'active'),
('Maria Fernandes', 'maria@ecommerceplus.com', '(21) 98888-2222', 'E-commerce Plus', 'Varejo', 'https://ecommerceplus.com', 'active'),
('Pedro Almeida', 'pedro@greenfood.com.br', '(31) 97777-3333', 'Green Food', 'Alimentação', 'https://greenfood.com.br', 'active'),
('Luciana Martins', 'luciana@fashionstyle.com', '(41) 96666-4444', 'Fashion Style', 'Moda', 'https://fashionstyle.com', 'active'),
('Roberto Cardoso', 'roberto@autocenter.com.br', '(51) 95555-5555', 'Auto Center', 'Automotivo', 'https://autocenter.com.br', 'prospect')
ON CONFLICT DO NOTHING;

-- Insert Sample Projects
INSERT INTO projects (name, description, client_id, status, priority, start_date, due_date, budget) VALUES
('Rebranding TechStart', 'Redesign completo da identidade visual', 1, 'in_progress', 'high', '2024-01-15', '2024-03-15', 25000.00),
('Campanha Black Friday', 'Planejamento e execução da campanha de BF', 2, 'completed', 'urgent', '2023-10-01', '2023-11-30', 50000.00),
('Lançamento Green Food', 'Estratégia de lançamento de nova linha', 3, 'planning', 'medium', '2024-02-01', '2024-04-30', 35000.00),
('Coleção Verão 2024', 'Campanha para coleção de verão', 4, 'review', 'high', '2024-01-10', '2024-02-28', 40000.00)
ON CONFLICT DO NOTHING;

-- Insert Sample Tasks
INSERT INTO tasks (project_id, title, description, status, priority, estimated_hours, due_date) VALUES
(1, 'Criar logotipo', 'Desenvolvimento do novo logotipo', 'done', 'high', 16, '2024-01-25'),
(1, 'Definir paleta de cores', 'Seleção de cores da marca', 'done', 'medium', 8, '2024-01-30'),
(1, 'Criar manual da marca', 'Documento com diretrizes', 'in_progress', 'medium', 24, '2024-02-15'),
(3, 'Briefing inicial', 'Reunião de alinhamento com cliente', 'todo', 'high', 4, '2024-02-05'),
(3, 'Pesquisa de mercado', 'Análise da concorrência', 'todo', 'medium', 16, '2024-02-15'),
(4, 'Produção de fotos', 'Ensaio fotográfico da coleção', 'internal_review', 'high', 20, '2024-02-10'),
(4, 'Criação de peças', 'Desenvolvimento de artes para redes sociais', 'client_approval', 'high', 32, '2024-02-20')
ON CONFLICT DO NOTHING;

-- Insert Sample Media Campaigns
INSERT INTO media_campaigns (project_id, name, channel, budget_planned, budget_spent, start_date, end_date, status) VALUES
(2, 'Black Friday Google Ads', 'google_ads', 20000.00, 19500.00, '2023-11-20', '2023-11-27', 'completed'),
(2, 'Black Friday Meta Ads', 'meta_ads', 15000.00, 14800.00, '2023-11-20', '2023-11-27', 'completed'),
(4, 'Coleção Verão Instagram', 'meta_ads', 12000.00, 8000.00, '2024-01-15', '2024-02-28', 'active'),
(4, 'Coleção Verão TikTok', 'tiktok', 8000.00, 3500.00, '2024-01-20', '2024-02-28', 'active')
ON CONFLICT DO NOTHING;

-- Insert Sample Financial Transactions
INSERT INTO financial_transactions (type, category, description, amount, client_id, project_id, due_date, status, invoice_number) VALUES
('income', 'Projeto', 'Pagamento Rebranding TechStart - Parcela 1', 12500.00, 1, 1, '2024-01-15', 'paid', 'NF-001'),
('income', 'Projeto', 'Pagamento Rebranding TechStart - Parcela 2', 12500.00, 1, 1, '2024-02-15', 'pending', 'NF-002'),
('expense', 'Freelancer', 'Pagamento designer freelancer', 3500.00, null, 1, '2024-01-30', 'paid', null),
('income', 'Projeto', 'Campanha Black Friday', 50000.00, 2, 2, '2023-12-15', 'paid', 'NF-003'),
('expense', 'Mídia', 'Investimento Google Ads', 19500.00, 2, 2, '2023-11-25', 'paid', null),
('expense', 'Mídia', 'Investimento Meta Ads', 14800.00, 2, 2, '2023-11-25', 'paid', null)
ON CONFLICT DO NOTHING;
