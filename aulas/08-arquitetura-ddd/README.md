# Recuperaçao de senha

**RF (Requisitos Funcionais)**

- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuario deve receber um e-mail com instruçoes de recuperaçao de senha;
- O usuario deve poder resetar sua senha;

**RNF (Requisitos Nao Funcionais)**

- Utilizar Mailtrap para testar envios de e-mail em ambiente de dev;
- Utilizar Amazon SES para envios em produçao;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Requisitos de Negocio)**

- O link enviado por e-mail para resetar senha deve expirar em 2 horas;
- O usuario precisa confirmar a nova senha ao resetar a senha antiga;

# Atualizaçao do perfil

**RF (Requisitos Funcionais)**

- O usuario deve poder atualizar seu nome, e-mail e senha;

**RN (Requisitos de Negocio)**

- O usuario nao pode alterar seu e-mail para um e-mail ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario deve confirmar a nova senha;

# Painel do prestador

**RF (Requisitos Funcionais)**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçoes nao lidas;

**RNF (Requisitos Nao Funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificaçoes do prestador devem ser armazenadas no MongoDB;
- As notificaçoes do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN (Requisitos de Negocio)**

- A notificaçao deve ter um status de lida ou nao-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF (Requisitos Funcionais)**

- O usuario deve poder listar todos os prestadores de serviço cadastrados;
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis de um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos Nao Funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN (Requisitos de Negocio)**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro as 8h, ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar serviços consigo mesmo;
