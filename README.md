# ⛽ Tanque Virtual - Monitor de Combustível

Este projeto é um **Sensor de Combustível Virtual** desenvolvido para suprir a falha física do sensor (boia) de veículos movidos à combustível. O app calcula o nível residual de combustível com base na distância percorrida e no consumo médio.

## 🚀 Funcionalidades
- **Cálculo de Decaimento:** Subtração automática de litros baseada no odômetro.
- **Entrada de Abastecimento:** Soma de litros parciais respeitando a capacidade de 54L.
- **Trava de Segurança:** O odômetro não permite retrocesso (impede erros de digitação).
- **Interface Mobile-First:** Design otimizado para uso em dispositivos móveis (PWA).
- **Persistência de Dados:** Armazenamento local para não perder informações ao reiniciar.

## 🛠️ Tecnologias Utilizadas
- **Backend:** Node.js com Express.
- **Frontend:** HTML5, JavaScript (Vanilla) e Tailwind CSS.
- **PWA:** Manifest.json para instalação como app nativo.
- **Armazenamento:** Sistema de arquivos (JSON) para persistência local.

## 📱 Como Visualizar o Protótipo
Você pode acessar a versão funcional hospedada no GitHub através do link abaixo:
> **[INSIRA O LINK DO SEU REPLIT AQUI](https://esouza15.github.io/Tanque-Virtual/)**

### Como Instalar no Android:
1. Abra o link no Chrome do Android.
2. Toque nos três pontos (⋮) e selecione **"Instalar aplicativo"**.
3. O ícone 3D aparecerá na sua tela inicial.

## 📊 Regras de Negócio
- **Capacidade do Tanque:** 54 Litros.
- **Média Etanol:** 6 km/l (Preferencial).
- **Média Gasolina:** 7 km/l.
