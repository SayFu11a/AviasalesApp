# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

"tickets": [
{
"price": 105080,
"carrier": "S7",
"segments": [
{
// Код города (iata)
"origin": "MOW",
// Код города (iata)
"destination": "HKT",
// Дата и время вылета туда
"date": "2024-10-22T03:59:43.054Z",
// Общее время перелёта в минутах
"duration": 1312,
// Массив кодов (iata) городов с пересадками
"stops": [
"DEL",
"HKG",
"DOH"
]
},
{
"origin": "HKT",
"destination": "MOW",
"date": "2025-02-18T10:26:23.553Z",
"duration": 793,
"stops": [
"IST"
]
}
]
},
