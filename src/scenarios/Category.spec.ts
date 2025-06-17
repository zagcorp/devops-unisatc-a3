import { test, expect } from '@playwright/test';
import data from '../../data/data.json';

test.describe('Testes da API de Categoria', () => {
    const baseURL = 'http://localhost:1337/api';

    test('GET /categories - deve retornar uma lista de categorias', async ({ request }) => {
        const response = await request.get(`${baseURL}/categories`);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('data');
        expect(Array.isArray(responseBody.data)).toBe(true);

        // Valida se as categorias retornadas correspondem às do arquivo data.json
        const categoriasEsperadas = data.categories.map(categoria => categoria.name);
        const categoriasRetornadas = responseBody.data.map((categoria: any) => categoria.attributes.name);
        expect(categoriasRetornadas).toEqual(expect.arrayContaining(categoriasEsperadas));
    });

    test('POST /categories - deve criar uma nova categoria', async ({ request }) => {
        const novaCategoria = {
            name: 'Categoria Exemplo',
            description: 'Descrição de exemplo',
        };

        const response = await request.post(`${baseURL}/categories`, {
            data: { data: novaCategoria },
        });
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('data');
        expect(responseBody.data.attributes.name).toBe(novaCategoria.name);
        expect(responseBody.data.attributes.description).toBe(novaCategoria.description);
    });
});