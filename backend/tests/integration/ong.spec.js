const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "integration test",
                email: "test@test.com",
                whatsapp: "31999999999",
                city: "Florestal",
                uf: "MG"
            })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})