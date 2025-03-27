// Datos mockeados
const dashboardStats = {
  users: 1280,
  sales: 392,
  profits: "$12,500",
};

const monthlySales = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
  data: [1200, 1900, 3000, 2500, 3200, 2700, 3500, 4000],
};

const latestOrders = [
  {
    id: 101,
    customer: "Juan Pérez",
    date: "2025-03-26",
    amount: "$150",
    status: "Completado",
  },
  {
    id: 102,
    customer: "Laura Gómez",
    date: "2025-03-26",
    amount: "$320",
    status: "Pendiente",
  },
  {
    id: 103,
    customer: "Carlos Díaz",
    date: "2025-03-25",
    amount: "$80",
    status: "Cancelado",
  },
  {
    id: 104,
    customer: "Ana Torres",
    date: "2025-03-24",
    amount: "$450",
    status: "Completado",
  },
];

// Render de tarjetas
document.getElementById(
  "usersCard"
).innerHTML = `<h3>Usuarios</h3><p>${dashboardStats.users}</p>`;
document.getElementById(
  "salesCard"
).innerHTML = `<h3>Ventas</h3><p>${dashboardStats.sales}</p>`;
document.getElementById(
  "profitsCard"
).innerHTML = `<h3>Ganancias</h3><p>${dashboardStats.profits}</p>`;

// Render de tabla
const tableBody = document.getElementById("ordersTableBody");
latestOrders.forEach((order) => {
  tableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.date}</td>
        <td>${order.amount}</td>
        <td>${order.status}</td>
      </tr>
    `;
});

// Render de gráfico
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: monthlySales.labels,
    datasets: [
      {
        label: "Ventas",
        data: monthlySales.data,
        backgroundColor: "#4e73df",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  },
});
