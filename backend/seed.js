const bcrypt = require('bcrypt');
const pool = require('./src/config/db'); // Puxa a nossa conexão com o PostgreSQL
require('dotenv').config();

async function popularBanco() {
  try {
    console.log('⏳ Iniciando a semeadura do banco de dados...');

    // 1. Criar a UBS Tiradentes
    const ubsQuery = `
      INSERT INTO unidades_de_saude (nome, endereco, municipio)
      VALUES ($1, $2, $3) RETURNING id;
    `;
    const ubsResult = await pool.query(ubsQuery, ['UBS Tiradentes', 'Av. Ministro João Arinos, S/N', 'Campo Grande']);
    const ubsId = ubsResult.rows[0].id;
    console.log(`✅ UBS Tiradentes criada com sucesso! (ID: ${ubsId})`);

    // 2. Criptografar a senha padrão para os dois usuários
    const senhaPadrao = 'natan123';
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senhaPadrao, salt);

    // 3. Criar o Administrador Municipal
    const adminQuery = `
      INSERT INTO usuarios (nome, email, senha_hash, perfil, municipio_responsavel)
      VALUES ($1, $2, $3, $4, $5);
    `;
    await pool.query(adminQuery, [
      'Prefeitura Municipal (Admin)', 
      'admin@campogrande.ms.gov.br', 
      senhaHash, 
      'ADMIN_MUNICIPAL', 
      'Campo Grande'
    ]);
    console.log('✅ Gestor Municipal criado com sucesso!');

    // 4. Criar o Gestor da UBS
    const gestorQuery = `
      INSERT INTO usuarios (nome, email, senha_hash, perfil, unidade_id)
      VALUES ($1, $2, $3, $4, $5);
    `;
    await pool.query(gestorQuery, [
      'Natan Rocha (Gestor)', 
      'gestor@ubstiradentes.com', 
      senhaHash, 
      'GESTOR_UBS', 
      ubsId
    ]);
    console.log('✅ Gestor da UBS criado com sucesso!');

    console.log('🎉 Tudo pronto! Contas criadas. A senha padrão para ambos é:', senhaPadrao);
    process.exit(0);
  } catch (erro) {
    console.error('❌ Falha ao tentar popular o banco:', erro);
    process.exit(1);
  }
}

popularBanco();