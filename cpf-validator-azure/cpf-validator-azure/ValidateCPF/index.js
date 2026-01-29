'use strict';

/**
 * Azure Function HTTP Trigger para validação de CPF
 */
module.exports = async function (context, req) {
  try {
    if (!req.body || !req.body.cpf) {
      context.res = {
        status: 400,
        body: { message: "CPF não informado ou corpo inválido" }
      };
      return;
    }

    const { cpf } = req.body;
    const valido = isValidCPF(cpf);

    context.res = {
      status: 200,
      body: {
        cpf,
        valido,
        message: valido ? "CPF válido" : "CPF inválido"
      }
    };
  } catch (err) {
    context.res = {
      status: 400,
      body: { message: "Corpo da requisição inválido" }
    };
  }
};

function isValidCPF(cpf) {
  const cleaned = cpf.replace(/\D/g, "");

  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false;

  const digits = cleaned.split("").map(Number);

  const calcCheckDigit = (slice) => {
    let sum = 0;
    let factor = slice + 1;
    for (let i = 0; i < slice; i++) {
      sum += digits[i] * factor--;
    }
    const result = (sum * 10) % 11;
    return result === 10 ? 0 : result;
  };

  const d1 = calcCheckDigit(9);
  const d2 = calcCheckDigit(10);

  return d1 === digits[9] && d2 === digits[10];
}
