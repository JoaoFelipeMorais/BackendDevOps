import {Router} from "express";
import {UsuarioController} from "../controllers/usuarioController";

const router = Router();
const usuarioController = new UsuarioController();

/**
 * @swagger
 * components:
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  example: 1
 *              nome:
 *                  type: string
 *                  example: Fulano da Silva
 */

/**
 * @swagger
 * /api/usuarios:
 *  get:
 *      summary: Lista todos os usuários
 *      tags: [Usuarios]
 *      responses:
 *          200:
 *              description: Lista de todos usuários
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 *          500:
 *              description: Erro interno
 */
router.get("/", (req, res) => usuarioController.getAll(req, res));

/**
 * @swagger
 * /api/usuarios/{id}:
 *  get:
 *      summary: Buscar usuários por Id
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Usuário foi encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuário não encontrado
 */

router.get("/:id", (req, res) => usuarioController.getById(req, res));

/**
 * @swagger
 * /api/usuarios:
 *  post:
 *      summary: Criar novos usuários
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nome:
 *                              type: string
 *                              example: Ciclano da Silva
 *      responses:
 *          201:
 *              description: Usuário Criado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 */

router.post("/", (req, res) => usuarioController.create(req, res));

/**
 * @swagger
 * /api/usuarios/{id}:
 *  put:
 *      summary: Atualiza um usuario
 *      description: Atualiza os dados de um usuario existente
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id do usuario que sera atualizado
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nome:
 *                              type: string
 *                              example: Cassiooo
 *      responses:
 *          200:
 *              description: Usuario atualizado com sucesso
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario nao encontrado
 *
 */

router.put("/:id", (req, res) => usuarioController.update(req, res));

/**
 * @swagger
 * /api/usuarios/{id}:
 *  delete:
 *      summary: exclui um usuario
 *      description: exclui o registro de um usuario existente
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          204:
 *              description: Usuário excluido com sucesso
 *          404:
 *              description: Usuário não encontrado
 *
 */


router.delete("/:id", (req, res) => usuarioController.delete(req, res));

export default router;