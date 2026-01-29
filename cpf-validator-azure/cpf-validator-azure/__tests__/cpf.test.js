const validate = require('../ValidateCPF/index');

test('CPF válido', async () => {
  const context = {};
  const req = { body: { cpf: '529.982.247-25' } };

  await validate(context, req);
  expect(context.res.body.valido).toBe(true);
});

test('CPF inválido', async () => {
  const context = {};
  const req = { body: { cpf: '111.111.111-11' } };

  await validate(context, req);
  expect(context.res.body.valido).toBe(false);
});
