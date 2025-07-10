# API - Delivery Controller 🚚

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

A RESTful API for a delivery management system, allowing clients to create deliveries and deliverymen to manage them. Built with Node.js, Express, Prisma, and PostgreSQL, featuring role-based authentication with JWT.

## ✨ Features

-   **Dual Role Authentication:** Separate and secure authentication for `Clients` and `Deliverymen` using JWT.
-   **Delivery Lifecycle Management:**
    -   Clients can create new delivery requests.
    -   Deliverymen can view all available (unassigned) deliveries.
    -   Deliverymen can accept a delivery, assigning it to themselves.
    -   Deliverymen can mark a delivery as complete.
-   **Secure Password Storage:** Passwords are encrypted using `bcrypt.js`.
-   **Type-Safe Codebase:** Built with TypeScript and Prisma for robust data modeling.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Authentication:** [JSON Web Token (JWT)](https://jwt.io/)
-   **Password Hashing:** [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## 🚀 Getting Started

To run this project locally, you'll need Node.js, npm, and a running PostgreSQL instance.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/api-delivery-controller.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd api-delivery-controller
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string and JWT secret.
    ```.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    JWT_SECRET="your-super-secret-key"
    ```
    *Replace the values with your PostgreSQL credentials and a secret key of your choice.*

5.  **Run database migrations:**
    This will create the necessary tables in your database.
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3000`.

## 🌐 API Endpoints

A summary of the main endpoints available:

| Method   | Endpoint                            | Description                                  | Authenticated as |
| :------- | :---------------------------------- | :------------------------------------------- | :--------------- |
| `POST`   | `/authenticate/client`              | Authenticates a client.                      | -                |
| `POST`   | `/authenticate/deliveryman`         | Authenticates a deliveryman.                 | -                |
| `POST`   | `/clients`                          | Creates a new client.                        | -                |
| `POST`   | `/deliveryman`                      | Creates a new deliveryman.                   | -                |
| `POST`   | `/deliveries`                       | Creates a new delivery.                      | Client           |
| `GET`    | `/deliveries/available`             | Lists all available (unassigned) deliveries. | Deliveryman      |
| `PATCH`  | `/deliveries/updateDeliveryman/:id` | Assigns a delivery to the logged-in deliveryman. | Deliveryman      |
| `PATCH`  | `/deliveries/updateEndDate/:id`     | Marks a delivery as complete.                | Deliveryman      |

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > Uma API RESTful para um sistema de gerenciamento de entregas, permitindo que clientes criem entregas e entregadores as gerenciem. Construída com Node.js, Express, Prisma e PostgreSQL, com autenticação baseada em papéis usando JWT.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js, npm e uma instância do PostgreSQL ativa.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` na raiz e adicione sua string de conexão do banco e um segredo para o JWT (veja o exemplo na seção em inglês).
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3000`.

</details>
